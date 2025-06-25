---
layout: post
title: "Support Vector Machines – An Intuitive Introduction"
date: 2025-06-23
---

---

# <span style="border-bottom: 3px solid var(--accent, #ffc107); padding-bottom: 0.2em;">Support Vector Machines</span>

---

- [ ] **SVMs ,What are they and why they are used?**

SVM is one of the most powerful supervised learning algorithm primarily used for classification tasks. The main goal of SVM is to classify instances based on there relative position with a decision boundary which is a HYPERPLANE. Since a hyperplane is a linear decision boundary one might think SVM would only work for linearly separable cases, but no that's the beauty of SVMs they work pretty well for non-linearly separable cases as well .Let's explore more about SVMs in this blog.

---

- [ ] **The Main Goal finding the optimal hyperplane.**

The main goal of SVMs is to find the best decision boundary reffered to as an optimal decision boundary or an optimal hyperplane ( since an SVM's decision boundary is a hyperplane).Once we have the hyperplane we can make classifications based on the hypothesis function defined as :
$$
h(x_i) = \begin{cases}
+1, & \text{if } w \cdot x + b \ge 0,\\
-1, & \text{if } w \cdot x + b < 0.
\end{cases}
$$
Let's understand what an hyperplane is and how to compare hyperplanes.

---

- [ ] **A generalized plane - Hyperplane.**

Hyperplane is a generalization of the 2-Dimensional plane for Higher Dimensions. It can be thought of as a geometric figure that divides a space into two parts,  for example: A line in case of 2D or a plane in case of 3D. It is worth noting that the dimension of a hyperplane is always one less than the dimension of the space which it is dividing.
The generalized equation of a hyperplane is $w⋅x+b=0$ . This equation seems familiar right, yes it is the equation of a plane in 3D and indeed it also the equation of a plane in any dimension where x is a n-dimensional vector and w is a vector normal to the hyperplane.

---

- [ ] **How to compare hyperplanes?**

Now to select the best hyperplane it is obvious that we have to compare hyperplanes therefore there must be a way of doing so. We have two different ways of comparing hyperplanes : Functional Margin and Geometric Margin.

**Functional Margin :** Let's first define a function $$ f=y(w.x+b)$$ the value of this function is positive for all correct classifications and negative for all misclassifications.
The Functional Margin of an Hyperplane is defined as $$
F = \min_{i=1,\dots,m} \bigl(y_i (w \cdot x + b)\bigr).
$$We can think of this as the distance of the point closest to the hyperplane.
Now the best hyperplane from a given set of hyperplanes would be the one having maximum Functional Margin.

**Geometric Margin:** Geometric margin is just a scaled version of the functional margin i.e.
$$
G = \min_{i=1,\dots,m} \Bigl( y_i \bigl(\frac{w}{\|w\|} \cdot x + \frac{b}{\|w\|}\bigr)\Bigr) = \frac{F}{\|w\|}
$$
Since w reperesents the normal vector of the hyperplane one could choose different w, parallel to each other to represent the same hyperplane and that would affect finding the best hyperplane. To avoid such clashes we scale the Functional margin by dividing by mag(w).

---

- [ ] **The optimization.**

To find the values of w and b of the optimal hyperplane we have to solve an optimization problem we have to maximize the Geometric Margin(G) (find the hyperplane with maximum G) subject to some constraints.
Putting it formally: 

$$
\begin{aligned}
\max_{w,b} \quad & G \\
\text{subject to}\quad & g_i \ge G, \quad i = 1,\dots,m.
\end{aligned}
$$
The constraint suggests that the geomteric margin of each other training example is greater than the Geometric Margin of the hyperplane which is true  by definition.

Rearranging the problem: 

$$ 
G =\frac{F}{\|w\|}
\\
\Rightarrow
\begin{aligned}
\max_{w,b} \quad & \frac{F}{\|w\|}  \\
\text{subject to}\quad & f_i \ge F, \quad i = 1,\dots,m.
\end{aligned}
$$

Scaling w and b such that F=1, scaling won't affect the optimal values of w and b.This scaling would convert our optimization solely in terms of w and b.

\begin{aligned}
\max_{w,b} \quad & \frac{1}{\|w\|}  \\
\text{subject to}\quad & f_i \ge 1, \quad i = 1,\dots,m.
\end{aligned}
$$\Rightarrow \begin{aligned}
\min_{w,b} \quad \|w\|  \\
\text{subject to}\quad & f_i \ge 1, \quad i = 1,\dots,m.
\end{aligned}$$

$$\Rightarrow \begin{aligned}
\min_{w,b} \quad \frac{1}{2}\|w\|^2  \\
\text{subject to}\quad & y_i(w.x_i+b)-1 \ge 0, \quad i = 1,\dots,m.
\end{aligned}$$

Therefore,we have got our final primal problem which is :
 \begin{aligned}
\min_{w,b} \quad \frac{1}{2}\|w\|^2  \\
\text{subject to}\quad & y_i(w.x_i+b)-1 \ge 0, \quad i = 1,\dots,m.
\end{aligned}

---

Now we can form the lagrangian  from the given primal probelm :

$$L(w, b, \alpha) = \frac{1}{2}\,w \cdot w - \sum_{i=1}^{m} \alpha_i \bigl[y_i\,(w \cdot x_i + b) - 1\bigr].$$

Taking gradient of $L(w, b, \alpha)$ wrt to w and b and setting them to 0: 

$$\nabla_w L(w, b, \alpha) = w - \sum_{i=1}^{m} \alpha_i\,y_i\,x_i = 0 \Rightarrow w= \sum_{i=1}^{m} \alpha_i\,y_i\,x_i$$

$$\nabla_b L(w, b, \alpha) = -\sum_{i=1}^{m} \alpha_i\,y_i = 0 \Rightarrow \sum_{i=1}^{m} \alpha_i\,y_i = 0$$

Plugging the value of w back to $L(w, b, \alpha)$ gives us the dual problem.Note that that the dual problem also has some constraints.
Formulating the dual : 

$$D(\alpha, b) = \sum_{i=1}^m \alpha_i- \frac{1}{2} \sum_{i=1}^m \sum_{j=1}^m
\alpha_i \,\alpha_j\, y_i\, y_j \,\bigl(x_i \cdot x_j\bigr)$$ 

$$\text{subject to } \alpha_i \ge 0 \; (i=1,\dots,m)
\quad\text{and}\quad
\sum_{i=1}^{m} \alpha_i \, y_i = 0.$$

maximizing $D(\alpha,b)$ subject to the constraints will give us the value of optimal w and b and hence we can find the optimal hyperplane.

---

- [ ] **KKT Conditions and its effect:**

**Primal and Dual Feasiblity:** Primal Feasiblity and Dual Feasiblity holds because of the constraints imposed.

**Complementary Slackness:** The Complementary Slackness condition states that $\alpha_i\,[y_i\,(w \cdot x_i + b) - 1] = 0.$ Now for the instances which are closest to the hyperplane ( let such instances be $x'$) 
$$y_i\,(w \cdot x' + b) - 1 = 0$$ 
Therfore for such instances $\alpha_i$ is positive and such instances are called **Support Vectors**. For all the other instances $y_i\,(w \cdot x_i + b) - 1\neq 0$    and hence $\alpha_i$ for such instances is 0.

---



































