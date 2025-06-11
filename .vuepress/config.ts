import {defineUserConfig} from "vuepress";
import type {DefaultThemeOptions} from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig(
    {
        title: "墨言墨语",
        description: "墨虞大师姐的博客",
        theme: recoTheme(
            {
                primaryColor: '#3DE1AD',
                style: "@vuepress-reco/style-default",
                logo: "https://q1.qlogo.cn/g?b=qq&nk=3228993382&s=100",
                author: "墨叶染千枝",
                authorAvatar: "/tx.jpg",
                docsRepo: "https://github.com/MoYeRanQianZhi/MoYeRanQianZhi.github.io",
                docsBranch: "main",
                docsDir: ".",
                lastUpdatedText: "",
                // series 为原 sidebar
                series: {
                    // "/docs/theme-reco/": [
                    //     {
                    //         text: "module one",
                    //         children: ["home", "theme"],
                    //     },
                    //     {
                    //         text: "module two",
                    //         children: ["api", "plugin"],
                    //     },
                    // ],
                },
                navbar: [
                    {
                        text: "主页",
                        icon: "Home",
                        link: "/"
                    },
                    {
                        text: "博客",
                        icon: "Blog",
                        link: "/blogs"
                    },
                    {
                        text: "文档",
                        icon: "Document",
                        children: [
                            {
                                text: "暂无",
                                link: "#"
                            },
                        ],
                    },
                    {
                        text: "类别",
                        icon: "CollapseCategories",
                        children: [
                            {
                                text: "墨虞有话说",
                                link: "/categories/moyuyouhuashuo/1/"
                            },
                            {
                                text: "原创",
                                link: "/tags/yuanchuang/1/"
                            },
                            {
                                text: "编程",
                                link: "/categories/biancheng/1/"
                            },
                            {
                                text: "教学",
                                link: "/categories/jiaoxue/1/"
                            },
                            {
                                text: "Python",
                                link: "/categories/Python/1/"
                            },
                            {
                                text: "深空意识体",
                                link: "/categories/shenkongyishiti/1/"
                            },
                            {
                                text: "小说",
                                link: "/categories/xiaoshuo/1/"
                            },
                        ]
                    },
                    {
                        text: "标签",
                        icon: "Tag",
                        children: [
                            {
                                text: "墨虞",
                                link: "/tags/moyu/1/"
                            },
                            {
                                text: "原创",
                                link: "/tags/yuanchuang/1/"
                            },
                            {
                                text: "编程",
                                link: "/tags/biancheng/1/"
                            },
                            {
                                text: "教学",
                                link: "/tags/jiaoxue/1/"
                            },
                            {
                                text: "Python",
                                link: "/tags/Python/1/"
                            },
                            {
                                text: "深空意识体",
                                link: "/tags/shenkongyishiti/1/"
                            },
                            {
                                text: "小说",
                                link: "/tags/xiaoshuo/1/"
                            },
                        ]
                    },
                ],
                bulletin: {
                    title: "墨的公告",
                    body: [
                        {
                            type: "text",
                            content: `🎉🎉🎉 墨言墨语上线啦！！！皆大欢喜！皆大欢喜！！！`,
                            style: "font-size: 16px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "text",
                            content: `在这里，墨虞将会分享各种各样的知识`,
                            style: "font-size: 15px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "title",
                            content: "社交链接",
                        },
                        {
                            type: "text",
                            content: `
                            <ul>
                                <li>
                                    <a href="https://github.com/MoYeRanQianZhi">
                                        GitHub
                                    <a/>
                                </li>
                                <li>
                                    <a href="https://twitter.com/MoYeRanQianZhi">
                                        X
                                    <a/>
                                </li>
                                <li>
                                    <a href="https://t.me/MoYeRanQianZhi">
                                        Telegram
                                    <a/>
                                </li>
                            </ul>`,
                            style: "font-size: 12px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "title",
                            content: "邮箱",
                        },
                        {
                            type: "text",
                            content: `
                            <ul>
                                <li>
                                    MoYeRanQianZhi@gmail.com
                                </li>
                                <li>
                                    MoYeRanQianZhi@outlook.com
                                </li>
                                <li>
                                    MoYeRanQianZhi@proton.me
                                </li>
                                <li>
                                    MoYeRanQianSoft@gmail.com
                                </li>
                            </ul>`,
                            style: "font-size: 12px;",
                        },
                        {
                            type: "hr",
                        },
                        {
                            type: "buttongroup",
                            children: [
                                {
                                    text: "点赞",
                                    link: "#",
                                    style: "font-size: 16px",
                                },
                            ],
                        },
                    ],
                },
                // commentConfig: {
                //     // type: 'valine',
                //     // // options 与 1.x 的 valineConfig 配置一致
                //     // options: {
                //     //     appId: 'xxx',
                //     //     appKey: 'xxx',
                //     //     placeholder: '你有什么想说的吗',
                //     //     // verify: true, // 验证码服务
                //     //     // notify: true,
                //     //     recordIP: true,
                //     //     hideComments: true // 隐藏评论
                //     // },
                // },
            }
        ),
        // debug: true,
    }
);
