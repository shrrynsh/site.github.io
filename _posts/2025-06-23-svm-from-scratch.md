---
layout: post
title: "Support Vector Machines – An Intuitive Introduction"
date: 2025-06-23
categories: ml
---

# Support Vector Machines


**❓ SVMs: What are they and why are they used?**

SVM is one of the most powerful supervised learning algorithms, primarily used for classification tasks. The main goal of SVM is to classify instances based on their relative position with a decision boundary (a **hyperplane**). SVMs work well for both linearly and non-linearly separable cases. Let's explore more about SVMs in this blog.

## The Main Goal: Finding the Optimal Hyperplane

The main goal of SVMs is to find the best decision boundary, referred to as the **optimal hyperplane**. Once we have the hyperplane, we can make classifications based on the hypothesis function defined as:

$$
h(x_i) = \begin{cases}
+1, & \text{if } w \cdot x + b \ge 0,\\
-1, & \text{if } w \cdot x + b < 0.
\end{cases}
$$

Let's understand what a hyperplane is and how to compare hyperplanes.

## A Generalized Plane – Hyperplane

A **hyperplane** is a generalization of the 2D plane for higher dimensions. It divides a space into two parts (e.g., a line in 2D, a plane in 3D). The dimension of a hyperplane is always one less than the space it divides. The generalized equation is $w \cdot x + b = 0$.

## How to Compare Hyperplanes?

To select the best hyperplane, we compare them using two metrics: **Functional Margin** and **Geometric Margin**.

### Functional Margin

Define $f = y(w \cdot x + b)$. Positive for correct classifications, negative for misclassifications. The functional margin is:

$$F = \min_{i=1,\dots,m} \bigl(y_i (w \cdot x + b)\bigr).$$

The best hyperplane has the maximum functional margin.

### Geometric Margin

A scaled version of the functional margin:

$$G = \min_{i=1,\dots,m} \Bigl( y_i \bigl(\frac{w}{\|w\|} \cdot x + \frac{b}{\|w\|}\bigr)\Bigr) = \frac{F}{\|w\|}$$

## The Optimization

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

## The Lagrangian and Dual Problem

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

## KKT Conditions and Their Effect

### Primal and Dual Feasibility

Both hold due to the constraints imposed.

### Complementary Slackness

$\alpha_i\,[y_i\,(w \cdot x_i + b) - 1] = 0.$ For instances closest to the hyperplane ($x'$):

$$y_i\,(w \cdot x' + b) - 1 = 0$$

For such instances, $\alpha_i$ is positive and they are called **Support Vectors**. For all other instances, $\alpha_i$ is 0.



































