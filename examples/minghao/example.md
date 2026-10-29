---
theme: ../../theme-minghao
layout: cover
colorSchema: light
background: /assets/landscape.svg
themeConfig:
  primary: '#4d7534'
---

# Minghao

A personal slide design reference

---

# Slide Title

Slide Subtitle

* Slide bullet text
  * Slide bullet text
  * Slide bullet text
* Slide bullet text
* Slide bullet text

---
layout: image-right
image: /assets/landscape.svg
---

# Slide Title

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

---
layout: section
---

# Section Title

---
layout: statement
---

# Statement

---
layout: fact
---

# 100%
Fact information

---
layout: quote
---

# "Notable quote"
Attribution

---
layout: image-left
image: /assets/landscape.svg
---

# Code

```ts {all|2|1-6|all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

---

# Macroevolutionary Models 宏观演化模型

Mixed text: 中文楷体与 English Helvetica

- 中文正文：物种在时间与空间中的变化。
- English prose: Models describe patterns of evolutionary change.
- Mixed list: 比较模型 with local fonts and [a local reference](/1).

| Term | Translation |
| --- | --- |
| Evolution | 演化 |
| Species | 物种 |

```ts
const label = 'Evolution 演化'
```

---

# Macroevolutionary Models and Comparative Methods 宏观演化模型与比较方法

A two-line heading with a subtitle

- The title keeps its font size and moves the band downward.
- The body follows the title instead of using a fixed vertical position.

---
titleBand: false
---

# A Page Without the Band

The page-level option keeps the title and body spacing.

## A body heading

Reusable theme defaults can be overridden for one slide.

---

This page starts with a paragraph and has no page title or band.

# A Heading Inside the Body

A later heading stays in the body.

---

# The Page Title

Only the opening heading receives a band.

# A Second Heading

A second level-one heading does not create another band.

---
layout: intro
---

# Introduction

The intro layout keeps its original composition.
