document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // 语言切换功能
    const languageSelector = document.getElementById('language');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            const selectedLanguage = this.value;
            const translations = {
                'zh': {
                    // 导航菜单
                    'home': '首页',
                    'about': '关于我们',
                    'business': '业务领域',
                    'news': '企业新闻',
                    'contact': '联系我们',
                    // 页脚
                    'follow': '关注我们',
                    'rights': '保留所有权利',
                    // 首页
                    'hero_title': '创新科技，引领未来',
                    'hero_subtitle': '专注于人工智能和智能制造领域的创新与发展',
                    'learn_more': '了解更多',
                    'about_title': '关于GHE',
                    'about_subtitle': '致力于成为全球领先的智能制造解决方案提供商',
                    'about_desc': 'GHE是一家专注于人工智能和智能制造领域的高科技企业，致力于为客户提供创新的解决方案。',
                    'business_title': '业务领域',
                    'business_subtitle': '全方位的智能制造解决方案',
                    'ai_solutions': '人工智能解决方案',
                    'smart_manufacturing': '智能制造',
                    'industrial_automation': '工业自动化',
                    'view_more': '查看更多',
                    // 关于我们页面
                    'company_profile': '公司简介',
                    'company_desc': 'GHE成立于2010年，是一家专注于人工智能和智能制造领域的高科技企业。我们致力于为客户提供创新的解决方案，推动产业升级。',
                    'our_mission': '我们的使命',
                    'mission_desc': '通过技术创新推动智能制造发展，为客户创造价值。',
                    'our_vision': '我们的愿景',
                    'vision_desc': '成为全球领先的智能制造解决方案提供商。',
                    'core_values': '核心价值观',
                    'innovation': '创新',
                    'excellence': '卓越',
                    'integrity': '诚信',
                    'cooperation': '合作',
                    // 业务领域页面
                    'solutions': '解决方案',
                    'ai_desc': '利用先进的人工智能技术，为企业提供智能化解决方案。',
                    'smart_desc': '整合物联网、大数据等技术，打造智能化工厂。',
                    'auto_desc': '提供完整的工业自动化解决方案，提升生产效率。',
                    // 新闻页面
                    'latest_news': '最新消息',
                    'news_subtitle': '了解GHE的最新动态和发展',
                    'all': '全部',
                    'news': '新闻',
                    'announcement': '公告',
                    'event': '活动',
                    'read_more': '阅读更多',
                    // 联系我们页面
                    'contact_title': '联系我们',
                    'contact_subtitle': '随时为您提供帮助',
                    'contact_info': '联系方式',
                    'address': '地址',
                    'address_content': '中国上海市浦东新区张江高科技园区',
                    'phone': '电话',
                    'email': '邮箱',
                    'message': '留言',
                    'name': '姓名',
                    'phone_number': '电话',
                    'message_content': '留言内容',
                    'submit': '提交',
                    // 社交媒体
                    'wechat': '微信',
                    'weibo': '微博',
                    'linkedin': '领英'
                },
                'en': {
                    // Navigation
                    'home': 'Home',
                    'about': 'About Us',
                    'business': 'Business',
                    'news': 'News',
                    'contact': 'Contact Us',
                    // Footer
                    'follow': 'Follow Us',
                    'rights': 'All Rights Reserved',
                    // Home Page
                    'hero_title': 'Innovative Technology, Leading the Future',
                    'hero_subtitle': 'Focusing on innovation and development in AI and smart manufacturing',
                    'learn_more': 'Learn More',
                    'about_title': 'About GHE',
                    'about_subtitle': 'Committed to becoming a global leader in smart manufacturing solutions',
                    'about_desc': 'GHE is a high-tech company focused on AI and smart manufacturing, dedicated to providing innovative solutions for our clients.',
                    'business_title': 'Business Areas',
                    'business_subtitle': 'Comprehensive Smart Manufacturing Solutions',
                    'ai_solutions': 'AI Solutions',
                    'smart_manufacturing': 'Smart Manufacturing',
                    'industrial_automation': 'Industrial Automation',
                    'view_more': 'View More',
                    // About Us Page
                    'company_profile': 'Company Profile',
                    'company_desc': 'Founded in 2010, GHE is a high-tech company focused on AI and smart manufacturing. We are committed to providing innovative solutions and promoting industrial upgrading.',
                    'our_mission': 'Our Mission',
                    'mission_desc': 'To promote smart manufacturing development through technological innovation and create value for our clients.',
                    'our_vision': 'Our Vision',
                    'vision_desc': 'To become a global leader in smart manufacturing solutions.',
                    'core_values': 'Core Values',
                    'innovation': 'Innovation',
                    'excellence': 'Excellence',
                    'integrity': 'Integrity',
                    'cooperation': 'Cooperation',
                    // Business Page
                    'solutions': 'Solutions',
                    'ai_desc': 'Leveraging advanced AI technology to provide intelligent solutions for enterprises.',
                    'smart_desc': 'Integrating IoT and big data to build smart factories.',
                    'auto_desc': 'Providing complete industrial automation solutions to improve production efficiency.',
                    // News Page
                    'latest_news': 'Latest News',
                    'news_subtitle': 'Stay updated with GHE\'s latest developments',
                    'all': 'All',
                    'news': 'News',
                    'announcement': 'Announcements',
                    'event': 'Events',
                    'read_more': 'Read More',
                    // Contact Page
                    'contact_title': 'Contact Us',
                    'contact_subtitle': 'Always here to help',
                    'contact_info': 'Contact Information',
                    'address': 'Address',
                    'address_content': 'Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai, China',
                    'phone': 'Phone',
                    'email': 'Email',
                    'message': 'Message',
                    'name': 'Name',
                    'phone_number': 'Phone Number',
                    'message_content': 'Message Content',
                    'submit': 'Submit',
                    // Social Media
                    'wechat': 'WeChat',
                    'weibo': 'Weibo',
                    'linkedin': 'LinkedIn'
                }
            };

            // 更新导航菜单
            document.querySelectorAll('.main-nav a').forEach(link => {
                const key = link.getAttribute('data-lang-key');
                if (key && translations[selectedLanguage][key]) {
                    link.textContent = translations[selectedLanguage][key];
                }
            });

            // 更新页脚
            document.querySelectorAll('.footer-section h4').forEach(heading => {
                const key = heading.getAttribute('data-lang-key');
                if (key && translations[selectedLanguage][key]) {
                    heading.textContent = translations[selectedLanguage][key];
                }
            });

            // 更新版权信息
            const copyright = document.querySelector('.footer-bottom p');
            if (copyright) {
                copyright.innerHTML = `&copy; 2024 GHE. ${translations[selectedLanguage]['rights']}`;
            }

            // 更新首页内容
            const heroSection = document.querySelector('.hero-content');
            if (heroSection) {
                const title = heroSection.querySelector('h1');
                const subtitle = heroSection.querySelector('p');
                const button = heroSection.querySelector('.cta-button');
                if (title) title.textContent = translations[selectedLanguage]['hero_title'];
                if (subtitle) subtitle.textContent = translations[selectedLanguage]['hero_subtitle'];
                if (button) button.textContent = translations[selectedLanguage]['learn_more'];
            }

            // 更新关于我们页面内容
            const aboutSection = document.querySelector('.about-section');
            if (aboutSection) {
                const title = aboutSection.querySelector('h2');
                const subtitle = aboutSection.querySelector('h3');
                const desc = aboutSection.querySelector('p');
                if (title) title.textContent = translations[selectedLanguage]['about_title'];
                if (subtitle) subtitle.textContent = translations[selectedLanguage]['about_subtitle'];
                if (desc) desc.textContent = translations[selectedLanguage]['about_desc'];
            }

            // 更新业务领域页面内容
            const businessSection = document.querySelector('.business-section');
            if (businessSection) {
                const title = businessSection.querySelector('h2');
                const subtitle = businessSection.querySelector('h3');
                if (title) title.textContent = translations[selectedLanguage]['business_title'];
                if (subtitle) subtitle.textContent = translations[selectedLanguage]['business_subtitle'];
            }

            // 更新新闻页面内容
            const newsHero = document.querySelector('.news-hero-content');
            if (newsHero) {
                const title = newsHero.querySelector('h1');
                const subtitle = newsHero.querySelector('p');
                if (title) title.textContent = translations[selectedLanguage]['latest_news'];
                if (subtitle) subtitle.textContent = translations[selectedLanguage]['news_subtitle'];
            }

            // 更新新闻筛选按钮
            document.querySelectorAll('.filter-btn').forEach(btn => {
                const key = btn.getAttribute('data-filter');
                if (key && translations[selectedLanguage][key]) {
                    btn.textContent = translations[selectedLanguage][key];
                }
            });

            // 更新联系我们页面内容
            const contactSection = document.querySelector('.contact-section');
            if (contactSection) {
                const title = contactSection.querySelector('h2');
                const subtitle = contactSection.querySelector('h3');
                if (title) title.textContent = translations[selectedLanguage]['contact_title'];
                if (subtitle) subtitle.textContent = translations[selectedLanguage]['contact_subtitle'];
            }

            // 更新表单标签
            document.querySelectorAll('label').forEach(label => {
                const key = label.getAttribute('data-lang-key');
                if (key && translations[selectedLanguage][key]) {
                    label.textContent = translations[selectedLanguage][key];
                }
            });

            // 更新按钮文本
            document.querySelectorAll('button[type="submit"]').forEach(button => {
                button.textContent = translations[selectedLanguage]['submit'];
            });

            // 更新"阅读更多"链接
            document.querySelectorAll('.read-more').forEach(link => {
                link.textContent = translations[selectedLanguage]['read_more'];
            });

            // 更新社交媒体链接
            document.querySelectorAll('.social-link').forEach(link => {
                const text = link.textContent.toLowerCase();
                if (translations[selectedLanguage][text]) {
                    link.textContent = translations[selectedLanguage][text];
                }
            });

            // 保存语言选择到本地存储
            localStorage.setItem('selectedLanguage', selectedLanguage);
        });

        // 页面加载时恢复上次选择的语言
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            languageSelector.value = savedLanguage;
            languageSelector.dispatchEvent(new Event('change'));
        }
    }

    // 导航栏滚动控制
    let lastScrollTop = 0;
    const header = document.querySelector('.main-header');
    const scrollThreshold = 50; // 滚动阈值

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // 判断滚动方向
        if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
            // 向下滚动且超过阈值，隐藏导航栏
            header.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动，显示导航栏
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 添加页面加载动画
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
}); 