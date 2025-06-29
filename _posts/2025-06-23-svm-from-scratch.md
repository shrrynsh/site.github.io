---
layout: post
title: "Support Vector Machines – An Intuitive Introduction"
date: 2025-06-23
categories: ml
---

<div style="margin-top:3rem;"></div>

<div style="text-align: center; margin-bottom: 2rem;">
  <div style="display: inline-block; background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 100%); border: 2px solid rgba(255,193,7,0.3); border-radius: 16px; padding: 2rem; box-shadow: 0 8px 32px rgba(255,193,7,0.1);">
    <h1 style="margin: 0; border-bottom: 4px solid var(--accent, #ffc107); padding-bottom: 0.5em; background: rgba(255,193,7,0.08); border-radius: 12px; padding: 1rem 1.5rem; display: inline-block; box-shadow: 0 4px 16px rgba(255,193,7,0.15);">
      Support Vector Machines
    </h1>
  </div>
</div>

<div style="margin-bottom: 2rem;"></div>

<div style="background: linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,193,7,0.03) 100%); border-left: 6px solid var(--accent, #ffc107); border-radius: 0 12px 12px 0; padding: 2rem; margin: 2rem 0; box-shadow: 0 4px 20px rgba(255,193,7,0.1);">
  <div style="display: flex; align-items: center; margin-bottom: 1rem;">
    <div style="background: var(--accent, #ffc107); color: #000; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 1rem; box-shadow: 0 4px 12px rgba(255,193,7,0.3);">
      ❓
    </div>
    <h3 style="margin: 0; color: var(--accent, #ffc107);">SVMs: What are they and why are they used?</h3>
  </div>
  
  <p style="margin: 0; line-height: 1.7; font-size: 1.1em;">
    SVM is one of the most powerful supervised learning algorithms, primarily used for classification tasks. The main goal of SVM is to classify instances based on their relative position with a decision boundary (a <strong>hyperplane</strong>). SVMs work well for both linearly and non-linearly separable cases. Let's explore more about SVMs in this blog.
  </p>
</div>

<div style="margin-bottom: 3rem;"></div>

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">The Main Goal: Finding the Optimal Hyperplane</span>

<div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid rgba(255,193,7,0.1);">
  <p style="margin: 0 0 1.5rem 0; line-height: 1.6;">
    The main goal of SVMs is to find the best decision boundary, referred to as the <strong>optimal hyperplane</strong>. Once we have the hyperplane, we can make classifications based on the hypothesis function defined as:
  </p>

  <div style="background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 100%); border: 2px solid rgba(255,193,7,0.2); border-radius: 12px; padding: 2rem; margin: 1.5rem 0; text-align: center; box-shadow: 0 8px 24px rgba(255,193,7,0.1);">
    $$
    h(x_i) = \begin{cases}
    +1, & \text{if } w \cdot x + b \ge 0,\\
    -1, & \text{if } w \cdot x + b < 0.
    \end{cases}
    $$
  </div>

  <p style="margin: 1.5rem 0 0 0; line-height: 1.6;">
    Let's understand what a hyperplane is and how to compare hyperplanes.
  </p>
</div>

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">A Generalized Plane – Hyperplane</span>

<div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid rgba(255,193,7,0.1);">
  <p style="margin: 0; line-height: 1.6;">
    A <strong>hyperplane</strong> is a generalization of the 2D plane for higher dimensions. It divides a space into two parts (e.g., a line in 2D, a plane in 3D). The dimension of a hyperplane is always one less than the space it divides. The generalized equation is $w \cdot x + b = 0$.
  </p>
</div>

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">How to Compare Hyperplanes?</span>

<div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid rgba(255,193,7,0.1);">
  <p style="margin: 0 0 1.5rem 0; line-height: 1.6;">
    To select the best hyperplane, we compare them using two metrics: <strong>Functional Margin</strong> and <strong>Geometric Margin</strong>.
  </p>

  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">
    <div style="background: linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,193,7,0.03) 100%); border: 2px solid rgba(255,193,7,0.15); border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 16px rgba(255,193,7,0.08);">
      <div style="display: flex; align-items: center; margin-bottom: 1rem;">
        <div style="background: var(--accent, #ffc107); color: #000; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 0.75rem; font-size: 0.9em;">
          F
        </div>
        <h4 style="margin: 0; color: var(--accent, #ffc107);">Functional Margin</h4>
      </div>
      <p style="margin: 0 0 1rem 0; line-height: 1.5;">
        Define $f = y(w \cdot x + b)$. Positive for correct classifications, negative for misclassifications. The functional margin is:
      </p>
      <div style="background: rgba(255,193,7,0.1); border-radius: 8px; padding: 1rem; text-align: center; border: 1px solid rgba(255,193,7,0.2);">
        $$F = \min_{i=1,\dots,m} \bigl(y_i (w \cdot x + b)\bigr).$$
      </div>
      <p style="margin: 1rem 0 0 0; line-height: 1.5; font-style: italic;">
        The best hyperplane has the maximum functional margin.
      </p>
    </div>

    <div style="background: linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,193,7,0.03) 100%); border: 2px solid rgba(255,193,7,0.15); border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 16px rgba(255,193,7,0.08);">
      <div style="display: flex; align-items: center; margin-bottom: 1rem;">
        <div style="background: var(--accent, #ffc107); color: #000; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 0.75rem; font-size: 0.9em;">
          G
        </div>
        <h4 style="margin: 0; color: var(--accent, #ffc107);">Geometric Margin</h4>
      </div>
      <p style="margin: 0 0 1rem 0; line-height: 1.5;">
        A scaled version of the functional margin:
      </p>
      <div style="background: rgba(255,193,7,0.1); border-radius: 8px; padding: 1rem; text-align: center; border: 1px solid rgba(255,193,7,0.2);">
        $$G = \min_{i=1,\dots,m} \Bigl( y_i \bigl(\frac{w}{\|w\|} \cdot x + \frac{b}{\|w\|}\bigr)\Bigr) = \frac{F}{\|w\|}$$
      </div>
    </div>
  </div>
</div>

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">The Optimization</span>

<div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid rgba(255,193,7,0.1);">
  <p style="margin: 0 0 1.5rem 0; line-height: 1.6;">
    To find the optimal hyperplane, we maximize the geometric margin $G$ subject to constraints:
  </p>

  <div style="background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 100%); border: 2px solid rgba(255,193,7,0.2); border-radius: 12px; padding: 2rem; margin: 1.5rem 0; text-align: center; box-shadow: 0 8px 24px rgba(255,193,7,0.1);">
    $$
    \begin{aligned}
    \max_{w,b} \quad & G \\
    \text{subject to}\quad & g_i \ge G, \quad i = 1,\dots,m.
    \end{aligned}
    $$
  </div>

  <p style="margin: 1.5rem 0; line-height: 1.6;">
    Rearranging and scaling leads to the final primal problem:
  </p>

  <div style="background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 100%); border: 2px solid rgba(255,193,7,0.2); border-radius: 12px; padding: 2rem; margin: 1.5rem 0; text-align: center; box-shadow: 0 8px 24px rgba(255,193,7,0.1);">
    $$
    \begin{aligned}
    \min_{w,b} \quad \frac{1}{2}\|w\|^2  \\
    \text{subject to}\quad & y_i(w.x_i+b)-1 \ge 0, \quad i = 1,\dots,m.
    \end{aligned}
    $$
  </div>
</div>

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">The Lagrangian and Dual Problem</span>

<div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid rgba(255,193,7,0.1);">
  <p style="margin: 0 0 1.5rem 0; line-height: 1.6;">
    Now we can form the Lagrangian from the primal problem:
  </p>

  <div style="background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 100%); border: 2px solid rgba(255,193,7,0.2); border-radius: 12px; padding: 2rem; margin: 1.5rem 0; text-align: center; box-shadow: 0 8px 24px rgba(255,193,7,0.1);">
    $$L(w, b, \alpha) = \frac{1}{2}\,w \cdot w - \sum_{i=1}^{m} \alpha_i \bigl[y_i\,(w \cdot x_i + b) - 1\bigr].$$
  </div>

  <p style="margin: 1.5rem 0; line-height: 1.6;">
    Taking gradients and setting to zero gives:
  </p>

  <div style="background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 100%); border: 2px solid rgba(255,193,7,0.2); border-radius: 12px; padding: 2rem; margin: 1.5rem 0; text-align: center; box-shadow: 0 8px 24px rgba(255,193,7,0.1);">
    $$
    \nabla_w L(w, b, \alpha) = w - \sum_{i=1}^{m} \alpha_i\,y_i\,x_i = 0 \Rightarrow w= \sum_{i=1}^{m} \alpha_i\,y_i\,x_i
    $$

    $$
    \nabla_b L(w, b, \alpha) = -\sum_{i=1}^{m} \alpha_i\,y_i = 0 \Rightarrow \sum_{i=1}^{m} \alpha_i\,y_i = 0
    $$
  </div>

  <p style="margin: 1.5rem 0; line-height: 1.6;">
    Plugging $w$ back gives the dual problem:
  </p>

  <div style="background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 100%); border: 2px solid rgba(255,193,7,0.2); border-radius: 12px; padding: 2rem; margin: 1.5rem 0; text-align: center; box-shadow: 0 8px 24px rgba(255,193,7,0.1);">
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
</div>

---

<div style="margin-bottom: 2rem;"></div>

## <span style="display: inline-block; border-left: 6px solid var(--accent, #ffc107); padding-left: 1rem; background: linear-gradient(90deg, rgba(255,193,7,0.08) 0%, transparent 100%); border-radius: 0 8px 8px 0; padding: 0.5rem 1rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(255,193,7,0.1);">KKT Conditions and Their Effect</span>

<div style="background: rgba(255,255,255,0.02); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border: 1px solid rgba(255,193,7,0.1);">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0;">
    <div style="background: linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,193,7,0.03) 100%); border: 2px solid rgba(255,193,7,0.15); border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 16px rgba(255,193,7,0.08);">
      <h4 style="margin: 0 0 1rem 0; color: var(--accent, #ffc107);">Primal and Dual Feasibility</h4>
      <p style="margin: 0; line-height: 1.5;">
        Both hold due to the constraints imposed.
      </p>
    </div>

    <div style="background: linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,193,7,0.03) 100%); border: 2px solid rgba(255,193,7,0.15); border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 16px rgba(255,193,7,0.08);">
      <h4 style="margin: 0 0 1rem 0; color: var(--accent, #ffc107);">Complementary Slackness</h4>
      <p style="margin: 0; line-height: 1.5;">
        $\alpha_i\,[y_i\,(w \cdot x_i + b) - 1] = 0.$ For instances closest to the hyperplane ($x'$):
      </p>
    </div>
  </div>

  <div style="background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 100%); border: 2px solid rgba(255,193,7,0.2); border-radius: 12px; padding: 2rem; margin: 1.5rem 0; text-align: center; box-shadow: 0 8px 24px rgba(255,193,7,0.1);">
    $$y_i\,(w \cdot x' + b) - 1 = 0$$
  </div>

  <div style="background: linear-gradient(135deg, rgba(255,193,7,0.08) 0%, rgba(255,193,7,0.03) 100%); border: 2px solid rgba(255,193,7,0.15); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; box-shadow: 0 4px 16px rgba(255,193,7,0.08);">
    <p style="margin: 0; line-height: 1.6;">
      For such instances, $\alpha_i$ is positive and they are called <strong>Support Vectors</strong>. For all other instances, $\alpha_i$ is 0.
    </p>
  </div>
</div>

---

<div style="margin-bottom: 3rem;"></div>

<div style="text-align: center; margin-top: 3rem;">
  <div style="display: inline-block; background: linear-gradient(135deg, rgba(255,193,7,0.1) 0%, rgba(255,193,7,0.05) 100%); border: 2px solid rgba(255,193,7,0.2); border-radius: 16px; padding: 2rem; box-shadow: 0 8px 32px rgba(255,193,7,0.1);">
    <p style="margin: 0; font-size: 1.1em; color: var(--accent, #ffc107); font-weight: bold;">
      🎯 Understanding SVMs: From Theory to Practice
    </p>
  </div>
</div>



































