import{_ as p,r as e,o,c as i,a as n,b as s,d as l,e as a}from"./app-x6SWjQM1.js";const c={},u=a('<h2 id="python简史" tabindex="-1"><a class="header-anchor" href="#python简史" aria-hidden="true">#</a> Python简史</h2><p>Python是一种高级编程语言，由荷兰程序员Guido van Rossum在1989年圣诞节期间开始编写。Guido van Rossum的目标是设计一种易于阅读和理解的语言，同时具有强大的功能。Python的名称并非来自蟒蛇，而是来自英国喜剧团Monty Python。这个选择显示了Python社区的幽默和轻松氛围。</p><p>Python的第一个公开版本（0.9.0）发布于 1991 年。随着时间的推移，Python的发展逐渐成熟，吸引了越来越多的开发者。1994年发布的Python1.0版本具有模块化、异常处理和函数式编程等特性，奠定了Python的基本框架。2000年发布的Python2.0版本引入了重要的新特性，如垃圾回收系统和Unicode支持。但随着时间的推移，Python2.x分支的维护成本越来越高，因此决定在2008年发布Python3.0版本，以解决Python2.x的一些设计缺陷和限制，并提供更加清晰和一致的语言规范。</p><p>目前，Python已经成为最受欢迎的编程语言之一。它被广泛用于Web开发、数据分析、人工智能、科学计算、自动化脚本等各种领域，成为许多开发者的首选语言之一。</p><h2 id="python入门" tabindex="-1"><a class="header-anchor" href="#python入门" aria-hidden="true">#</a> Python入门</h2><h3 id="python的安装" tabindex="-1"><a class="header-anchor" href="#python的安装" aria-hidden="true">#</a> Python的安装</h3>',6),r=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"Python是一种跨平台的编程语言，因此可以在各种操作系统上安装和运行。在这一步中，我将介绍如何在不同的操作系统中安装Python，包括Windows、macOS、Linux和Android系统。")],-1),d=n("h4",{id:"windows",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),s(" Windows")],-1),k=n("p",null,"在Windows系统上安装Python非常简单：",-1),v={href:"https://www.python.org",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,[n("p",null,"运行下载的安装程序，并按照提示进行安装。")],-1),b=n("li",null,[n("p",null,[s("完成安装后，可以在CMD或PowerShell中输入"),n("code",null,"python"),s("命令来验证Python是否成功安装。")])],-1),y=a(`<hr><h4 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> macOS</h4><p>在macOS上安装Python非常简单，因为macOS自带了Python解释器：</p><ol><li><p>打开终端。</p></li><li><p>输入<code>python3</code>命令，如果系统提示安装Python，则按照提示完成安装。如果系统已经安装Python，则会显示Python的版本信息。</p></li></ol><hr><h4 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h4><p>大多数Linux发行版都预装了Python，但如果需要安装其他版本或更新版本，可以通过包管理器进行安装：</p><p>对于基于Debian的发行版（eg:Ubuntu），可以使用以下命令安装Python：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于基于RedHat的发行版（eg:CentOS、Fedora），可以使用以下命令安装Python：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum update
<span class="token function">sudo</span> yum <span class="token function">install</span> python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="android" tabindex="-1"><a class="header-anchor" href="#android" aria-hidden="true">#</a> Android</h4><p>在Android设备上安装Python可以通过Termux来实现：</p><ol><li><p>在Google Play商店中下载并安装Termux应用。</p></li><li><p>打开 Termux 应用，运行以下命令来安装 Python：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>通过以上步骤，你可以在不同的操作系统上成功安装Python。</p><p><em>因网络问题无法下载的同学也不用担心，我会在文章结尾附上提前准备好的网盘链接。</em></p><h3 id="从helloworld开始入门" tabindex="-1"><a class="header-anchor" href="#从helloworld开始入门" aria-hidden="true">#</a> 从HelloWorld开始入门</h3><p>首先准备好一个合适的编辑器或IDE例如Pycharm、VisualStudioCode、IDEA、Vi、Vim、Emacs、SublimeText、VisualStudio、Notepad++、JupyterNotebook或者Python自带的IDLE甚至是普通的文本编辑器。</p><blockquote><p>顺便偷偷安利一下博主自己开发的IDEM集成开发环境。</p></blockquote><p>然后自信的输入以下代码！</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>点击运行(在PyCharm中可以Ctrl+Shift+F10快捷运行)或者保存后在命令行输入<code>python 文件名.py</code>运行。</p><p>然后恭喜你，踏入了Python的大门，但是不要骄傲，因为后面是一座高山。</p><p>Python向来是以多种多样的模块而被称赞的，你可以轻松的在命令行用pip来安装第三方模块。</p><p>而想要使用模块，则需要导入(import)。</p><p>例如以下代码就是在导入sys模块：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sys是一个重要的核心模块，涉及到传参、导入、输入输出等重要功能。</p><p>而print的本质也是调用了sys模块。</p><p>以下代码也可输出HelloWorld：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&quot;Hello World!\\n&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量是一个编程语言的关键部分，在Python里用等于号(=)来赋值，而定义函数(def)本质上也是定义一种特殊的变量。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">from</span> typing <span class="token keyword">import</span> IO


<span class="token keyword">def</span> <span class="token function">printin</span><span class="token punctuation">(</span><span class="token operator">*</span>values<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">:</span> IO<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>sep<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token keyword">for</span> value <span class="token keyword">in</span> values<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> end<span class="token punctuation">)</span>
    <span class="token builtin">file</span><span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token operator">*</span>values<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    printin<span class="token punctuation">(</span><span class="token operator">*</span>values<span class="token punctuation">,</span> sep<span class="token operator">=</span>sep<span class="token punctuation">,</span> end<span class="token operator">=</span>end<span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token operator">=</span>sys<span class="token punctuation">.</span>stdout<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">*</span>values<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    printf<span class="token punctuation">(</span><span class="token operator">*</span>values<span class="token punctuation">,</span> sep<span class="token operator">=</span>sep<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    println<span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;World!&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以再运用一些变量：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">from</span> typing <span class="token keyword">import</span> IO


<span class="token keyword">def</span> <span class="token function">printin</span><span class="token punctuation">(</span><span class="token operator">*</span>values<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">:</span> IO<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">file</span><span class="token punctuation">.</span>write<span class="token punctuation">(</span>sep<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token keyword">for</span> value <span class="token keyword">in</span> values<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> end<span class="token punctuation">)</span>
    <span class="token builtin">file</span><span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">printf</span><span class="token punctuation">(</span><span class="token operator">*</span>values<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    printin<span class="token punctuation">(</span><span class="token operator">*</span>values<span class="token punctuation">,</span> sep<span class="token operator">=</span>sep<span class="token punctuation">,</span> end<span class="token operator">=</span>end<span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token operator">=</span>sys<span class="token punctuation">.</span>stdout<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">*</span>values<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    printf<span class="token punctuation">(</span><span class="token operator">*</span>values<span class="token punctuation">,</span> sep<span class="token operator">=</span>sep<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    h <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span>
    w <span class="token operator">=</span> <span class="token string">&quot;World!&quot;</span>
    hw <span class="token operator">=</span> h<span class="token punctuation">,</span> w
    println<span class="token punctuation">(</span><span class="token operator">*</span>hw<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中的星号(*)表示解包，解包是Python的一个非常方便的特性。</p><p>和其他语言一样，Python有着分支与循环。</p><p>例如以下就是一个简单的分支，效果是只对谢怜问候。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;谢怜&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;你好吖~</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">~&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;滚！</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">！&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    hello<span class="token punctuation">(</span><span class="token string">&quot;谢怜&quot;</span><span class="token punctuation">)</span>
    hello<span class="token punctuation">(</span><span class="token string">&quot;戚容&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而利用elif可以创建一个多分支结构，如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;谢怜&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;你好吖~</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">~&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> name <span class="token operator">==</span> <span class="token string">&quot;花城&quot;</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">贴贴~&quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;滚！</span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">！&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    hello<span class="token punctuation">(</span><span class="token string">&quot;谢怜&quot;</span><span class="token punctuation">)</span>
    hello<span class="token punctuation">(</span><span class="token string">&quot;花城&quot;</span><span class="token punctuation">)</span>
    hello<span class="token punctuation">(</span><span class="token string">&quot;戚容&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而循环又有for循环和while循环两种。</p><p>for循环可以遍历一个可迭代类型(eg:列表、元组)：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">print_hello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;你好, </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">&quot;谢怜&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;花城&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;谢俞&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;贺朝&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;游惑&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;秦究&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;魏婴&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;蓝湛&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        print_hello<span class="token punctuation">(</span>n<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>既然提到了for循环，就不得不提一下yield关键词了，利用yield关键词，可以轻松的创建一个可迭代类型。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">print_hello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;你好, </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">names</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> n <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">&quot;谢怜&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;花城&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;谢俞&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;贺朝&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;游惑&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;秦究&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;魏婴&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;蓝湛&quot;</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">yield</span> n


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> n <span class="token keyword">in</span> names<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        print_hello<span class="token punctuation">(</span>n<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外通过内置函数range和关键词for，可以轻松的创建一个计次循环：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>另外通过while也能创建简单的计次循环:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> i <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>while循环的本质是：当表达式的布尔结果为True时，则执行循环体，当然，对于无限循环(while True)，在运用时需要注意，避免程序无法停止。</p><p>while的基本语法:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> <span class="token operator">&lt;</span>表达式<span class="token operator">&gt;</span><span class="token punctuation">:</span>
    <span class="token operator">&lt;</span>循环体<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>而在循环过程中，可以用break来中断循环，用continue来跳过本次循环。</p><p>在Python中，是支持异步编程的，使用异步可以更快更有效地处理并发任务，提高程序的性能和响应速度。</p><p>以下就是一个异步输出HelloWorld和GoodLuck的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> asyncio
<span class="token keyword">import</span> sys


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">printf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>write<span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">HelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">yield</span> <span class="token string">&quot;Hello&quot;</span>
    <span class="token keyword">yield</span> <span class="token string">&quot; &quot;</span>
    <span class="token keyword">yield</span> <span class="token string">&quot;World&quot;</span>
    <span class="token keyword">yield</span> <span class="token string">&quot;!&quot;</span>
    <span class="token keyword">yield</span> <span class="token string">&quot;\\n&quot;</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">GoodLuck</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Good Luck!&quot;</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">async</span> <span class="token keyword">for</span> value <span class="token keyword">in</span> HelloWorld<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">await</span> printf<span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> GoodLuck<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">await</span> printf<span class="token punctuation">(</span><span class="token keyword">await</span> hello<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    asyncio<span class="token punctuation">.</span>run<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了异步，Python也支持多线程，多线程也可以用于同时处理多个任务。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread
<span class="token keyword">import</span> sys


<span class="token keyword">def</span> <span class="token function">printf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>write<span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>flush<span class="token punctuation">(</span><span class="token punctuation">)</span>


thread_one <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> printf<span class="token punctuation">(</span><span class="token string">&quot;Hello &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
thread_two <span class="token operator">=</span> Thread<span class="token punctuation">(</span>target<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> printf<span class="token punctuation">(</span><span class="token string">&quot;World!\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    thread_one<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    thread_two<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

    thread_one<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
    thread_two<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上示例中，使用了threading库中的Thread类来实现多线程，并且用来lambda来定义匿名函数，当然，用def来定义也是一样的。</p><p>在Python中，有着多种多样的GUI，可以轻松的写出各种各样的GUI程序，其中Tkinter是Python自带的一种简单易学的GUI库。</p><p>以下就是一个简单的显示HelloWorld的一个窗口示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> tkinter <span class="token keyword">import</span> Tk<span class="token punctuation">,</span> Label

root <span class="token operator">=</span> Tk<span class="token punctuation">(</span><span class="token punctuation">)</span>

Label<span class="token punctuation">(</span>
    master<span class="token operator">=</span>root<span class="token punctuation">,</span>
    text<span class="token operator">=</span><span class="token string">&quot;Hello World!&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    root<span class="token punctuation">.</span>mainloop<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用Tkinter中的ttk模块，更加美观，可以用来高度定制一套美观的主题。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> tkinter <span class="token keyword">import</span> Tk
<span class="token keyword">from</span> tkinter<span class="token punctuation">.</span>ttk <span class="token keyword">import</span> Button

root <span class="token operator">=</span> Tk<span class="token punctuation">(</span><span class="token punctuation">)</span>
root<span class="token punctuation">.</span>geometry<span class="token punctuation">(</span><span class="token string">&quot;300x200&quot;</span><span class="token punctuation">)</span>

button <span class="token operator">=</span> Button<span class="token punctuation">(</span>
    master<span class="token operator">=</span>root<span class="token punctuation">,</span>
    text<span class="token operator">=</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span>
    command<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> button<span class="token punctuation">.</span>config<span class="token punctuation">(</span>text<span class="token operator">=</span><span class="token string">&quot;World!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
button<span class="token punctuation">.</span>pack<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    root<span class="token punctuation">.</span>mainloop<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了Tkinter，Python还有WxPython和PyQt等多种多样的GUI，但是这些第三方模块都需要使用<code>pip install 模块名</code>指令来安装。</p><p>以下是WxPython显示HelloWorld的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> wx <span class="token keyword">import</span> Frame<span class="token punctuation">,</span> Panel<span class="token punctuation">,</span> StaticText<span class="token punctuation">,</span> App


<span class="token keyword">class</span> <span class="token class-name">MyFrame</span><span class="token punctuation">(</span>Frame<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">,</span> title<span class="token operator">=</span><span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        panel <span class="token operator">=</span> Panel<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        StaticText<span class="token punctuation">(</span>panel<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">,</span> pos<span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> App<span class="token punctuation">(</span><span class="token punctuation">)</span>
    frame <span class="token operator">=</span> MyFrame<span class="token punctuation">(</span><span class="token punctuation">)</span>
    frame<span class="token punctuation">.</span>Show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span>MainLoop<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是PyQt显示HelloWorld的示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QLabel

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    label <span class="token operator">=</span> QLabel<span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span>
    label<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span>app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就是最后一块难啃的瓜——面向对象编程。</p><p>在下面的示例中，博主会演示类的定义与继承：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> abc <span class="token keyword">import</span> abstractmethod
<span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum


<span class="token keyword">class</span> <span class="token class-name">Value</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    HC <span class="token operator">=</span> <span class="token string">&quot;花城&quot;</span>
    XL <span class="token operator">=</span> <span class="token string">&quot;谢怜&quot;</span>
    XY <span class="token operator">=</span> <span class="token string">&quot;谢俞&quot;</span>
    HZ <span class="token operator">=</span> <span class="token string">&quot;贺朝&quot;</span>
    墨叶染千枝 <span class="token operator">=</span> <span class="token string">&quot;墨叶染千枝&quot;</span>


<span class="token keyword">class</span> <span class="token class-name">Anything</span><span class="token punctuation">:</span>
    _anything <span class="token operator">=</span> <span class="token string">&quot;This is Anything.&quot;</span>


<span class="token keyword">class</span> <span class="token class-name">MoYeRanQianZhi</span><span class="token punctuation">:</span>
    _copyright <span class="token operator">=</span> <span class="token string">&quot;版权归墨叶染千枝所有&quot;</span>
    _author <span class="token operator">=</span> <span class="token string">&quot;墨叶染千枝&quot;</span>

    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">copyright</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_copyright

    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">author</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>_author


<span class="token keyword">class</span> <span class="token class-name">MoYeRanApplication</span><span class="token punctuation">(</span>Anything<span class="token punctuation">,</span> MoYeRanQianZhi<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token decorator annotation punctuation">@abstractmethod</span>
    <span class="token keyword">def</span> <span class="token function">__main__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">pass</span>

    <span class="token decorator annotation punctuation">@property</span>
    <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>__main__


<span class="token keyword">class</span> <span class="token class-name">Application</span><span class="token punctuation">(</span>MoYeRanApplication<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;版权: </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>copyright<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;作者: </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>author<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Application started!&quot;</span><span class="token punctuation">)</span>

    <span class="token decorator annotation punctuation">@staticmethod</span>
    <span class="token keyword">def</span> <span class="token function">__call__</span><span class="token punctuation">(</span>value<span class="token punctuation">:</span> Value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> value <span class="token keyword">is</span> Value<span class="token punctuation">.</span>HC<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我爱花城&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> value <span class="token keyword">is</span> Value<span class="token punctuation">.</span>XL<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我爱谢怜&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> value <span class="token keyword">is</span> Value<span class="token punctuation">.</span>XY<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我爱谢俞&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> value <span class="token keyword">is</span> Value<span class="token punctuation">.</span>HZ<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我爱贺朝&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> value <span class="token keyword">is</span> Value<span class="token punctuation">.</span>墨叶染千枝<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我最爱墨叶染千枝&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">__main__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">for</span> v <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">(</span>Value<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span>
                self<span class="token punctuation">(</span>v<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">print_anything</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>_anything<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> Application<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;define application!&quot;</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：Python的变量名是支持非ASCII字符(eg:中文、日文、韩文、古希腊文)的，但是不建议，博主是为了演示所以特意加了一个中文变量(以至于在Pycharm中会警告)。</p><p>好了，应该差不多五分钟了吧，学到这里，你就已经成功跨出了第一步，但是不要骄傲，因为后面还有无数座喜马拉雅山脉与无数的万丈深渊等着你去跨越！</p>`,78);function h(g,w){const t=e("ExternalLinkIcon");return o(),i("div",null,[u,r,d,k,n("ol",null,[n("li",null,[n("p",null,[s("访问"),n("a",v,[s("Python官方网站"),l(t)]),s("，并下载最新版本的Python安装程序")])]),m,b]),y])}const _=p(c,[["render",h],["__file","wufenzhongPythonsutong.html.vue"]]);export{_ as default};
