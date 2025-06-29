---
layout: post
title: "Support Vector Machines – An Intuitive Introduction"
date: 2025-06-23
categories: ml
---

<div style="margin-top:3rem;"></div>

# <span style="display: inline-block; border-bottom: 4px solid var(--accent, #ffc107); padding-bottom: 0.3em; background: linear-gradient(90deg, rgba(255,193,7,0.1) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; box-shadow: 0 4px 16px rgba(255,193,7,0.15);">Support Vector Machines</span>

<div style="margin-bottom: 2rem;"></div>

> <strong>❓ SVMs: What are they and why are they used?</strong>
>
> SVM is one of the most powerful supervised learning algorithms, primarily used for classification tasks. The main goal of SVM is to classify instances based on their relative position with a decision boundary (a <strong>hyperplane</strong>). SVMs work well for both linearly and non-linearly separable cases. Let's explore more about SVMs in this blog.

<div style="margin-bottom: 3rem;"></div>

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">The Main Goal: Finding the Optimal Hyperplane</span>

The main goal of SVMs is to find the best decision boundary, referred to as the <strong>optimal hyperplane</strong>. Once we have the hyperplane, we can make classifications based on the hypothesis function defined as:

$$
h(x_i) = \begin{cases}
+1, & \text{if } w \cdot x + b \ge 0,\\
-1, & \text{if } w \cdot x + b < 0.
\end{cases}
$$

Let's understand what a hyperplane is and how to compare hyperplanes.

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">A Generalized Plane – Hyperplane</span>

A <strong>hyperplane</strong> is a generalization of the 2D plane for higher dimensions. It divides a space into two parts (e.g., a line in 2D, a plane in 3D). The dimension of a hyperplane is always one less than the space it divides. The generalized equation is $w \cdot x + b = 0$.

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">How to Compare Hyperplanes?</span>

To select the best hyperplane, we compare them using two metrics: <strong>Functional Margin</strong> and <strong>Geometric Margin</strong>.

### <span style="display: inline-block; border-left: 4px solid var(--accent, #ffc107); padding-left: 0.75rem; background: linear-gradient(90deg, rgba(255,193,7,0.06) 0%, transparent 100%); border-radius: 0 6px 6px 0; padding: 0.3rem 0.75rem; margin-bottom: 0.5rem;">Functional Margin</span>

Define $f = y(w \cdot x + b)$. Positive for correct classifications, negative for misclassifications. The functional margin is:

$$F = \min_{i=1,\dots,m} \bigl(y_i (w \cdot x + b)\bigr).$$

The best hyperplane has the maximum functional margin.

### <span style="display: inline-block; border-left: 4px solid var(--accent, #ffc107); padding-left: 0.75rem; background: linear-gradient(90deg, rgba(255,193,7,0.06) 0%, transparent 100%); border-radius: 0 6px 6px 0; padding: 0.3rem 0.75rem; margin-bottom: 0.5rem;">Geometric Margin</span>

A scaled version of the functional margin:

$$G = \min_{i=1,\dots,m} \Bigl( y_i \bigl(\frac{w}{\|w\|} \cdot x + \frac{b}{\|w\|}\bigr)\Bigr) = \frac{F}{\|w\|}$$

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">The Optimization</span>

To find the optimal hyperplane, we maximize the geometric margin $G$ subject to constraints:

$$
\begin{aligned}
\max_{w,b} \quad & G \\
\text{subject to}\quad & g_i \ge G, \quad i = 1,\dots,m.
\end{aligned}
$$

Rearranging and scaling leads to the final primal problem:

$$
\begin{aligned}
\min_{w,b} \quad \frac{1}{2}\|w\|^2  \\
\text{subject to}\quad & y_i(w.x_i+b)-1 \ge 0, \quad i = 1,\dots,m.
\end{aligned}
$$

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">The Lagrangian and Dual Problem</span>

Now we can form the Lagrangian from the primal problem:

$$L(w, b, \alpha) = \frac{1}{2}\,w \cdot w - \sum_{i=1}^{m} \alpha_i \bigl[y_i\,(w \cdot x_i + b) - 1\bigr].$$

Taking gradients and setting to zero gives:

$$
\nabla_w L(w, b, \alpha) = w - \sum_{i=1}^{m} \alpha_i\,y_i\,x_i = 0 \Rightarrow w= \sum_{i=1}^{m} \alpha_i\,y_i\,x_i
$$

$$
\nabla_b L(w, b, \alpha) = -\sum_{i=1}^{m} \alpha_i\,y_i = 0 \Rightarrow \sum_{i=1}^{m} \alpha_i\,y_i = 0
$$

Plugging $w$ back gives the dual problem:

$$
D(\alpha, b) = \sum_{i=1}^m \alpha_i- \frac{1}{2} \sum_{i=1}^m \sum_{j=1}^m
\alpha_i \,\alpha_j\, y_i\, y_j \,\bigl(x_i \cdot x_j\bigr)
$$

$$
\text{subject to } \alpha_i \ge 0 \; (i=1,\dots,m)
\quad\text{and}\quad
\sum_{i=1}^{m} \alpha_i \, y_i = 0.
$$

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">KKT Conditions and Their Effect</span>

### <span style="display: inline-block; border-left: 4px solid var(--accent, #ffc107); padding-left: 0.75rem; background: linear-gradient(90deg, rgba(255,193,7,0.06) 0%, transparent 100%); border-radius: 0 6px 6px 0; padding: 0.3rem 0.75rem; margin-bottom: 0.5rem;">Primal and Dual Feasibility</span>

Both hold due to the constraints imposed.

### <span style="display: inline-block; border-left: 4px solid var(--accent, #ffc107); padding-left: 0.75rem; background: linear-gradient(90deg, rgba(255,193,7,0.06) 0%, transparent 100%); border-radius: 0 6px 6px 0; padding: 0.3rem 0.75rem; margin-bottom: 0.5rem;">Complementary Slackness</span>

$\alpha_i\,[y_i\,(w \cdot x_i + b) - 1] = 0.$ For instances closest to the hyperplane ($x'$):

$$y_i\,(w \cdot x' + b) - 1 = 0$$

For such instances, $\alpha_i$ is positive and they are called <strong>Support Vectors</strong>. For all other instances, $\alpha_i$ is 0.

---

<div style="margin-bottom: 3rem;"></div>

<div style="text-align: center; margin-top: 3rem;">
  <div style="display: inline-block; background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 100%); border: 2px solid rgba(255,193,7,0.2); border-radius: 16px; padding: 2rem; box-shadow: 0 8px 32px rgba(255,193,7,0.1);">
    <p style="margin: 0; font-size: 1.1em; color: var(--accent, #ffc107); font-weight: bold;">
      🎯 Understanding SVMs: From Theory to Practice
    </p>
  </div>
</div>



































