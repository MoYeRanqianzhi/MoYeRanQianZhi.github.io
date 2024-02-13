---
title: 五分钟Python速通
date: 2024/02/13 15:00:00
description: Python新手教学
tags:
    - 墨虞
    - 原创
    - 编程
    - 教学
    - Python
categories:
    - 原创
    - 编程
    - 教学
    - Python
---

## Python简史

Python是一种高级编程语言，由荷兰程序员Guido van Rossum在1989年圣诞节期间开始编写。Guido van Rossum的目标是设计一种易于阅读和理解的语言，同时具有强大的功能。Python的名称并非来自蟒蛇，而是来自英国喜剧团Monty Python。这个选择显示了Python社区的幽默和轻松氛围。

Python的第一个公开版本（0.9.0）发布于 1991 年。随着时间的推移，Python的发展逐渐成熟，吸引了越来越多的开发者。1994年发布的Python1.0版本具有模块化、异常处理和函数式编程等特性，奠定了Python的基本框架。2000年发布的Python2.0版本引入了重要的新特性，如垃圾回收系统和Unicode支持。但随着时间的推移，Python2.x分支的维护成本越来越高，因此决定在2008年发布Python3.0版本，以解决Python2.x的一些设计缺陷和限制，并提供更加清晰和一致的语言规范。

目前，Python已经成为最受欢迎的编程语言之一。它被广泛用于Web开发、数据分析、人工智能、科学计算、自动化脚本等各种领域，成为许多开发者的首选语言之一。

## Python入门

### Python的安装

:::tip
Python是一种跨平台的编程语言，因此可以在各种操作系统上安装和运行。在这一步中，我将介绍如何在不同的操作系统中安装Python，包括Windows、macOS、Linux和Android系统。
:::

#### Windows

在Windows系统上安装Python非常简单：

1. 访问[Python官方网站](https://www.python.org)，并下载最新版本的Python安装程序

2. 运行下载的安装程序，并按照提示进行安装。

3. 完成安装后，可以在CMD或PowerShell中输入`python`命令来验证Python是否成功安装。

---

#### macOS

在macOS上安装Python非常简单，因为macOS自带了Python解释器：

1. 打开终端。

2. 输入`python3`命令，如果系统提示安装Python，则按照提示完成安装。如果系统已经安装Python，则会显示Python的版本信息。

---

#### Linux

大多数Linux发行版都预装了Python，但如果需要安装其他版本或更新版本，可以通过包管理器进行安装：

对于基于Debian的发行版（eg:Ubuntu），可以使用以下命令安装Python：

```sh
sudo apt-get update
sudo apt-get install python3
```

对于基于RedHat的发行版（eg:CentOS、Fedora），可以使用以下命令安装Python：

```sh
sudo yum update
sudo yum install python3
```

---

#### Android

在Android设备上安装Python可以通过Termux来实现：

1. 在Google Play商店中下载并安装Termux应用。

2. 打开 Termux 应用，运行以下命令来安装 Python：
    ```sh
    pkg install python
    ```


通过以上步骤，你可以在不同的操作系统上成功安装Python。

*因网络问题无法下载的同学也不用担心，我会在文章结尾附上提前准备好的网盘链接。*

### 从HelloWorld开始入门

首先准备好一个合适的编辑器或IDE例如Pycharm、VisualStudioCode、IDEA、Vi、Vim、Emacs、SublimeText、VisualStudio、Notepad++、JupyterNotebook或者Python自带的IDLE甚至是普通的文本编辑器。

> 顺便偷偷安利一下博主自己开发的IDEM集成开发环境。

然后自信的输入以下代码！

```python
print("Hello World!")
```

点击运行(在PyCharm中可以Ctrl+Shift+F10快捷运行)或者保存后在命令行输入`python 文件名.py`运行。

然后恭喜你，踏入了Python的大门，但是不要骄傲，因为后面是一座高山。

Python向来是以多种多样的模块而被称赞的，你可以轻松的在命令行用pip来安装第三方模块。

而想要使用模块，则需要导入(import)。

例如以下代码就是在导入sys模块：

```python
import sys
```

sys是一个重要的核心模块，涉及到传参、导入、输入输出等重要功能。

而print的本质也是调用了sys模块。

以下代码也可输出HelloWorld：

```python
import sys

sys.stdout.write("Hello World!\n")
```

变量是一个编程语言的关键部分，在Python里用等于号(=)来赋值，而定义函数(def)本质上也是定义一种特殊的变量。

```python
import sys
from typing import IO


def printin(*values, sep=" ", end="", file: IO):
    file.write(sep.join([str(value) for value in values]) + end)
    file.flush()


def printf(*values, sep=" ", end=""):
    printin(*values, sep=sep, end=end, file=sys.stdout)


def println(*values, sep=" "):
    printf(*values, sep=sep, end="\n")


if __name__ == '__main__':
    println("Hello", "World!")

```

我们可以再运用一些变量：

```python
import sys
from typing import IO


def printin(*values, sep=" ", end="", file: IO):
    file.write(sep.join([str(value) for value in values]) + end)
    file.flush()


def printf(*values, sep=" ", end=""):
    printin(*values, sep=sep, end=end, file=sys.stdout)


def println(*values, sep=" "):
    printf(*values, sep=sep, end="\n")


if __name__ == '__main__':
    h = "Hello"
    w = "World!"
    hw = h, w
    println(*hw)

```

其中的星号(*)表示解包，解包是Python的一个非常方便的特性。

和其他语言一样，Python有着分支与循环。

例如以下就是一个简单的分支，效果是只对谢怜问候。

```python
def hello(name):
    if name == "谢怜":
        print(f"你好吖~{name}~")
    else:
        print(f"滚！{name}！")


if __name__ == "__main__":
    hello("谢怜")
    hello("戚容")

```

而利用elif可以创建一个多分支结构，如下：

```python
def hello(name):
    if name == "谢怜":
        print(f"你好吖~{name}~")
    elif name == "花城":
        print(f"{name}贴贴~")
    else:
        print(f"滚！{name}！")


if __name__ == "__main__":
    hello("谢怜")
    hello("花城")
    hello("戚容")

```

而循环又有for循环和while循环两种。

for循环可以遍历一个可迭代类型(eg:列表、元组)：

```python
def print_hello(name):
    print(f"你好, {name}")


def main():
    for n in ["谢怜", "花城", "谢俞", "贺朝", "游惑", "秦究", "魏婴", "蓝湛"]:
        print_hello(n)


if __name__ == '__main__':
    main()

```

既然提到了for循环，就不得不提一下yield关键词了，利用yield关键词，可以轻松的创建一个可迭代类型。

```python
def print_hello(name):
    print(f"你好, {name}")


def names():
    for n in ["谢怜", "花城", "谢俞", "贺朝", "游惑", "秦究", "魏婴", "蓝湛"]:
        yield n


def main():
    for n in names():
        print_hello(n)


if __name__ == '__main__':
    main()

```

另外通过内置函数range和关键词for，可以轻松的创建一个计次循环：

```python
for i in range(6):
    print("Hello World!")
```

另外通过while也能创建简单的计次循环:

```python
i = 0
while i < 6:
    print("Hello World!")
    i += 1
```

或者:

```python
i = 0
while True:
    print("Hello World!")
    i += 1
    if i >= 6:
        break
```

while循环的本质是：当表达式的布尔结果为True时，则执行循环体，当然，对于无限循环(while True)，在运用时需要注意，避免程序无法停止。

while的基本语法:

```python
while <表达式>:
    <循环体>
```

而在循环过程中，可以用break来中断循环，用continue来跳过本次循环。

在Python中，是支持异步编程的，使用异步可以更快更有效地处理并发任务，提高程序的性能和响应速度。

以下就是一个异步输出HelloWorld和GoodLuck的示例：

```python
import asyncio
import sys


async def printf(value):
    sys.stdout.write(value)
    sys.stdout.flush()


async def HelloWorld():
    yield "Hello"
    yield " "
    yield "World"
    yield "!"
    yield "\n"


async def GoodLuck():
    return "Good Luck!"


async def hello():
    async for value in HelloWorld():
        await printf(value)
    return await GoodLuck()


async def main():
    await printf(await hello() + "\n")


if __name__ == '__main__':
    asyncio.run(main())

```

除了异步，Python也支持多线程，多线程也可以用于同时处理多个任务。

```python
from threading import Thread
import sys


def printf(value):
    sys.stdout.write(value)
    sys.stdout.flush()


thread_one = Thread(target=lambda: printf("Hello "))
thread_two = Thread(target=lambda: printf("World!\n"))

if __name__ == '__main__':
    thread_one.start()
    thread_two.start()

    thread_one.join()
    thread_two.join()

```

在以上示例中，使用了threading库中的Thread类来实现多线程，并且用来lambda来定义匿名函数，当然，用def来定义也是一样的。

在Python中，有着多种多样的GUI，可以轻松的写出各种各样的GUI程序，其中Tkinter是Python自带的一种简单易学的GUI库。

以下就是一个简单的显示HelloWorld的一个窗口示例：

```python
from tkinter import Tk, Label

root = Tk()

Label(
    master=root,
    text="Hello World!"
).pack()

if __name__ == '__main__':
    root.mainloop()

```

也可以使用Tkinter中的ttk模块，更加美观，可以用来高度定制一套美观的主题。

```python
from tkinter import Tk
from tkinter.ttk import Button

root = Tk()
root.geometry("300x200")

button = Button(
    master=root,
    text="Hello",
    command=lambda: button.config(text="World!")
)
button.pack()

if __name__ == '__main__':
    root.mainloop()

```


除了Tkinter，Python还有WxPython和PyQt等多种多样的GUI，但是这些第三方模块都需要使用`pip install 模块名`指令来安装。

以下是WxPython显示HelloWorld的示例：

```python
from wx import Frame, Panel, StaticText, App


class MyFrame(Frame):
    def __init__(self):
        super().__init__(None, title='Hello, World!', size=(300, 200))
        panel = Panel(self)
        StaticText(panel, label='Hello, World!', pos=(100, 50))


if __name__ == '__main__':
    app = App()
    frame = MyFrame()
    frame.Show()
    app.MainLoop()

```

以下是PyQt显示HelloWorld的示例：

```python
import sys
from PySide6.QtWidgets import QApplication, QLabel

if __name__ == '__main__':
    app = QApplication(sys.argv)
    label = QLabel('Hello World!')
    label.show()
    sys.exit(app.exec())

```

然后就是最后一块难啃的瓜——面向对象编程。

在下面的示例中，博主会演示类的定义与继承：

```python
from abc import abstractmethod
from enum import Enum


class Value(Enum):
    HC = "花城"
    XL = "谢怜"
    XY = "谢俞"
    HZ = "贺朝"
    墨叶染千枝 = "墨叶染千枝"


class Anything:
    _anything = "This is Anything."


class MoYeRanQianZhi:
    _copyright = "版权归墨叶染千枝所有"
    _author = "墨叶染千枝"

    @property
    def copyright(self):
        return self._copyright

    @property
    def author(self):
        return self._author


class MoYeRanApplication(Anything, MoYeRanQianZhi):
    @abstractmethod
    def __main__(self):
        pass

    @property
    def main(self):
        return self.__main__


class Application(MoYeRanApplication):
    def __init__(self):
        print(f"版权: {self.copyright}")
        print(f"作者: {self.author}")
        print("Application started!")

    @staticmethod
    def __call__(value: Value):
        if value is Value.HC:
            print("我爱花城")
        elif value is Value.XL:
            print("我爱谢怜")
        elif value is Value.XY:
            print("我爱谢俞")
        elif value is Value.HZ:
            print("我爱贺朝")
        elif value is Value.墨叶染千枝:
            print("我最爱墨叶染千枝")

    def __main__(self):
        for i in range(1, 3):
            for v in list(Value)[::i]:
                self(v)

    def print_anything(self):
        print(self._anything)


if __name__ == '__main__':
    app = Application()
    print("define application!")
    app.main()

```

注：Python的变量名是支持非ASCII字符(eg:中文、日文、韩文、古希腊文)的，但是不建议，博主是为了演示所以特意加了一个中文变量(以至于在Pycharm中会警告)。

好了，应该差不多五分钟了吧，学到这里，你就已经成功跨出了第一步，但是不要骄傲，因为后面还有无数座喜马拉雅山脉与无数的万丈深渊等着你去跨越！