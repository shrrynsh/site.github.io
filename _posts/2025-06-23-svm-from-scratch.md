---
layout: post
title: "Support Vector Machines – An Intuitive Introduction"
date: 2025-06-23
categories: ml
---

<div style="margin-top:2.5rem;"></div>

# <span style="border-bottom: 3px solid var(--accent, #ffc107); padding-bottom: 0.2em; background:rgba(255,193,7,0.07); border-radius:8px; padding-left:0.5em; padding-right:0.5em;">Support Vector Machines</span>

---

<div style="margin-bottom:1.5rem;"></div>

> <strong>❓ SVMs: What are they and why are they used?</strong>
>
> SVM is one of the most powerful supervised learning algorithms, primarily used for classification tasks. The main goal of SVM is to classify instances based on their relative position with a decision boundary (a <strong>hyperplane</strong>). SVMs work well for both linearly and non-linearly separable cases. Let's explore more about SVMs in this blog.

---

## <span style="border-left: 5px solid var(--accent, #ffc107); padding-left:0.5em;">The Main Goal: Finding the Optimal Hyperplane</span>

The main goal of SVMs is to find the best decision boundary, referred to as the <strong>optimal hyperplane</strong>. Once we have the hyperplane, we can make classifications based on the hypothesis function defined as:

<div style="background:rgba(255,193,7,0.07); border-radius:8px; padding:1em; margin:1em 0;">

$$
h(x_i) = \begin{cases}
+1, & \text{if } w \cdot x + b \ge 0,\\
-1, & \text{if } w \cdot x + b < 0.
\end{cases}
$$

</div>

Let's understand what a hyperplane is and how to compare hyperplanes.

---

## <span style="border-left: 5px solid var(--accent, #ffc107); padding-left:0.5em;">A Generalized Plane – Hyperplane</span>

A <strong>hyperplane</strong> is a generalization of the 2D plane for higher dimensions. It divides a space into two parts (e.g., a line in 2D, a plane in 3D). The dimension of a hyperplane is always one less than the space it divides. The generalized equation is $w \cdot x + b = 0$.

---

## <span style="border-left: 5px solid var(--accent, #ffc107); padding-left:0.5em;">How to Compare Hyperplanes?</span>

To select the best hyperplane, we compare them using two metrics: <strong>Functional Margin</strong> and <strong>Geometric Margin</strong>.

> <strong>Functional Margin:</strong> Define $f = y(w \cdot x + b)$. Positive for correct classifications, negative for misclassifications. The functional margin is:
>
> <div style="background:rgba(255,193,7,0.07); border-radius:8px; padding:1em; margin:1em 0;">
> $$F = \min_{i=1,\dots,m} \bigl(y_i (w \cdot x + b)\bigr).$$
> </div>
> The best hyperplane has the maximum functional margin.

> <strong>Geometric Margin:</strong> A scaled version of the functional margin:
>
> <div style="background:rgba(255,193,7,0.07); border-radius:8px; padding:1em; margin:1em 0;">
> $$G = \min_{i=1,\dots,m} \Bigl( y_i \bigl(\frac{w}{\|w\|} \cdot x + \frac{b}{\|w\|}\bigr)\Bigr) = \frac{F}{\|w\|}$$
> </div>

---

## <span style="border-left: 5px solid var(--accent, #ffc107); padding-left:0.5em;">The Optimization</span>

To find the optimal hyperplane, we maximize the geometric margin $G$ subject to constraints:

<div style="background:rgba(255,193,7,0.07); border-radius:8px; padding:1em; margin:1em 0;">

$$
\begin{aligned}
\max_{w,b} \quad & G \\
\text{subject to}\quad & g_i \ge G, \quad i = 1,\dots,m.
\end{aligned}
$$

</div>

Rearranging and scaling leads to the final primal problem:

<div style="background:rgba(255,193,7,0.07); border-radius:8px; padding:1em; margin:1em 0;">

$$
\begin{aligned}
\min_{w,b} \quad \frac{1}{2}\|w\|^2  \\
\text{subject to}\quad & y_i(w.x_i+b)-1 \ge 0, \quad i = 1,\dots,m.
\end{aligned}
$$

</div>

---

## <span style="border-left: 5px solid var(--accent, #ffc107); padding-left:0.5em;">The Lagrangian and Dual Problem</span>

Now we can form the Lagrangian from the primal problem:

<div style="background:rgba(255,193,7,0.07); border-radius:8px; padding:1em; margin:1em 0;">

$$L(w, b, \alpha) = \frac{1}{2}\,w \cdot w - \sum_{i=1}^{m} \alpha_i \bigl[y_i\,(w \cdot x_i + b) - 1\bigr].$$

</div>

Taking gradients and setting to zero gives:

<div style="background:rgba(255,193,7,0.07); border-radius:8px; padding:1em; margin:1em 0;">

$$
\nabla_w L(w, b, \alpha) = w - \sum_{i=1}^{m} \alpha_i\,y_i\,x_i = 0 \Rightarrow w= \sum_{i=1}^{m} \alpha_i\,y_i\,x_i
$$

$$
\nabla_b L(w, b, \alpha) = -\sum_{i=1}^{m} \alpha_i\,y_i = 0 \Rightarrow \sum_{i=1}^{m} \alpha_i\,y_i = 0
$$

</div>

Plugging $w$ back gives the dual problem:

<div style="background:rgba(255,193,7,0.07); border-radius:8px; padding:1em; margin:1em 0;">

$$
D(\alpha, b) = \sum_{i=1}^m \alpha_i- \frac{1}{2} \sum_{i=1}^m \sum_{j=1}^m
\alpha_i \,\alpha_j\, y_i\, y_j \,\bigl(x_i \cdot x_j\bigr)
$$

$$
\text{subject to } \alpha_i \ge 0 \; (i=1,\dots,m)
\quad\text{and}\quad
\sum_{i=1}^{m} \alpha_i \, y_i = 0.
$$

</div>

---

## <span style="border-left: 5px solid var(--accent, #ffc107); padding-left:0.5em;">KKT Conditions and Their Effect</span>

> <strong>Primal and Dual Feasibility:</strong> Both hold due to the constraints imposed.
>
> <strong>Complementary Slackness:</strong> $\alpha_i\,[y_i\,(w \cdot x_i + b) - 1] = 0.$ For instances closest to the hyperplane ($x'$):
>
> $$y_i\,(w \cdot x' + b) - 1 = 0$$
>
> For such instances, $\alpha_i$ is positive and they are called <strong>Support Vectors</strong>. For all other instances, $\alpha_i$ is 0.

---



































