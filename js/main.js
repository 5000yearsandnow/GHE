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
                    'about_subtitle': '创新驱动发展，科技引领未来',
                    'about_desc': 'GHE是一家专注于人工智能和智能制造领域的高科技企业，致力于为客户提供创新的解决方案。',
                    'business_title': '业务领域',
                    'business_subtitle': '多元化发展，全方位服务',
                    'business_overview': '业务概览',
                    'business_overview_desc': 'GHE致力于为客户提供全方位的解决方案，涵盖多个核心业务领域。我们通过创新技术和专业服务，为客户创造长期价值。',
                    'tech_innovation': '技术创新',
                    'tech_innovation_desc': '专注于前沿技术研发，推动行业创新发展',
                    'ai': '人工智能',
                    'big_data': '大数据分析',
                    'cloud': '云计算服务',
                    'energy_solutions': '能源解决方案',
                    'energy_solutions_desc': '提供清洁能源和可持续发展方案',
                    'renewable': '可再生能源',
                    'energy_mgmt': '能源管理',
                    'smart_grid': '智能电网',
                    'consulting': '咨询服务',
                    'consulting_desc': '专业团队提供全方位咨询服务',
                    'strategy': '战略规划',
                    'operation': '运营优化',
                    'risk': '风险管理',
                    'case_studies': '成功案例',
                    'case1_title': '智能工厂改造项目',
                    'case1_desc': '为某大型制造企业提供智能化改造解决方案',
                    'case2_title': '新能源发电站建设',
                    'case2_desc': '协助客户建设大型太阳能发电站',
                    // 关于我们页面
                    'company_profile': '公司简介',
                    'company_desc': 'GHE是一家致力于创新科技发展的全球性企业，我们专注于为客户提供最前沿的技术解决方案。自成立以来，我们始终坚持"创新、专业、诚信"的核心价值观，不断推动行业发展。',
                    'our_mission': '我们的使命',
                    'mission_desc': '通过技术创新推动智能制造发展，为客户创造价值。',
                    'our_vision': '我们的愿景',
                    'vision_desc': '成为全球领先的智能制造解决方案提供商。',
                    'core_values': '企业价值观',
                    'innovation': '创新',
                    'innovation_desc': '持续创新，引领行业发展',
                    'excellence': '专业',
                    'excellence_desc': '专业服务，追求卓越品质',
                    'integrity': '诚信',
                    'integrity_desc': '诚信为本，赢得客户信任',
                    'company_history': '发展历程',
                    'history_2020_title': '公司成立',
                    'history_2020_desc': 'GHE正式成立，开启创新之旅',
                    'history_2021_title': '业务扩展',
                    'history_2021_desc': '成功拓展国际市场，建立全球业务网络',
                    'history_2022_title': '技术创新',
                    'history_2022_desc': '获得多项技术专利，成为行业领导者',
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
                    'contact_subtitle': '期待与您沟通交流',
                    'contact_info': '联系方式',
                    'headquarters': '总部地址',
                    'address_content': '北京市朝阳区xxx大厦',
                    'working_hours': '工作时间',
                    'working_hours_content': '周一至周五: 9:00 - 18:00',
                    'online_message': '在线留言',
                    'name_placeholder': '您的姓名',
                    'email_placeholder': '电子邮箱',
                    'phone_placeholder': '联系电话',
                    'message_placeholder': '请输入您的留言内容',
                    'location': '公司位置',
                    'map_loading': '地图加载中...',
                    // 社交媒体
                    'wechat': '微信',
                    'weibo': '微博',
                    'linkedin': '领英',
                    // 首页特色内容
                    'feature_tech': '创新科技',
                    'feature_tech_desc': '持续创新，引领行业发展',
                    'feature_global': '全球视野',
                    'feature_global_desc': '立足本土，放眼全球',
                    'feature_sustainable': '可持续发展',
                    'feature_sustainable_desc': '践行环保，共创未来',
                    // 新闻页面内容
                    'news1_title': 'GHE发布新一代人工智能解决方案',
                    'news1_desc': 'GHE今日宣布推出新一代人工智能解决方案，该方案将显著提升企业运营效率...',
                    'news2_title': '2024年第一季度财报发布',
                    'news2_desc': 'GHE今日发布2024年第一季度财报，营收同比增长25%，净利润增长30%...',
                    'news3_title': 'GHE参加2024全球科技创新峰会',
                    'news3_desc': 'GHE将作为主要赞助商参加2024全球科技创新峰会，展示最新技术成果...',
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
                    'about_subtitle': 'Innovation Drives Development, Technology Leads the Future',
                    'about_desc': 'GHE is a high-tech company focused on AI and smart manufacturing, dedicated to providing innovative solutions for our clients.',
                    'business_title': 'Business Areas',
                    'business_subtitle': 'Diversified Development, Comprehensive Services',
                    'business_overview': 'Business Overview',
                    'business_overview_desc': 'GHE is committed to providing comprehensive solutions covering multiple core business areas. Through innovative technology and professional services, we create long-term value for our clients.',
                    'tech_innovation': 'Technology Innovation',
                    'tech_innovation_desc': 'Focusing on cutting-edge technology R&D, driving industry innovation',
                    'ai': 'Artificial Intelligence',
                    'big_data': 'Big Data Analytics',
                    'cloud': 'Cloud Computing Services',
                    'energy_solutions': 'Energy Solutions',
                    'energy_solutions_desc': 'Providing clean energy and sustainable development solutions',
                    'renewable': 'Renewable Energy',
                    'energy_mgmt': 'Energy Management',
                    'smart_grid': 'Smart Grid',
                    'consulting': 'Consulting Services',
                    'consulting_desc': 'Professional team providing comprehensive consulting services',
                    'strategy': 'Strategic Planning',
                    'operation': 'Operation Optimization',
                    'risk': 'Risk Management',
                    'case_studies': 'Success Stories',
                    'case1_title': 'Smart Factory Transformation Project',
                    'case1_desc': 'Providing intelligent transformation solutions for a large manufacturing enterprise',
                    'case2_title': 'New Energy Power Station Construction',
                    'case2_desc': 'Assisting clients in building large-scale solar power stations',
                    // About Us Page
                    'company_profile': 'Company Profile',
                    'company_desc': 'GHE is a global enterprise dedicated to innovative technology development. We focus on providing cutting-edge technical solutions to our clients. Since our establishment, we have consistently upheld our core values of "Innovation, Professionalism, and Integrity" to drive industry development.',
                    'our_mission': 'Our Mission',
                    'mission_desc': 'To promote smart manufacturing development through technological innovation and create value for our clients.',
                    'our_vision': 'Our Vision',
                    'vision_desc': 'To become a global leader in smart manufacturing solutions.',
                    'core_values': 'Corporate Values',
                    'innovation': 'Innovation',
                    'innovation_desc': 'Continuous innovation, leading industry development',
                    'excellence': 'Professionalism',
                    'excellence_desc': 'Professional service, pursuing excellence',
                    'integrity': 'Integrity',
                    'integrity_desc': 'Integrity-based, earning customer trust',
                    'company_history': 'Development History',
                    'history_2020_title': 'Company Establishment',
                    'history_2020_desc': 'GHE officially established, embarking on an innovative journey',
                    'history_2021_title': 'Business Expansion',
                    'history_2021_desc': 'Successfully expanded into international markets, establishing a global business network',
                    'history_2022_title': 'Technological Innovation',
                    'history_2022_desc': 'Obtained multiple technology patents, becoming an industry leader',
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
                    'contact_subtitle': 'Looking forward to communicating with you',
                    'contact_info': 'Contact Information',
                    'headquarters': 'Headquarters Address',
                    'address_content': 'XXX Building, Chaoyang District, Beijing',
                    'working_hours': 'Working Hours',
                    'working_hours_content': 'Monday to Friday: 9:00 AM - 6:00 PM',
                    'online_message': 'Online Message',
                    'name_placeholder': 'Your Name',
                    'email_placeholder': 'Email Address',
                    'phone_placeholder': 'Phone Number',
                    'message_placeholder': 'Please enter your message',
                    'location': 'Company Location',
                    'map_loading': 'Map loading...',
                    // Social Media
                    'wechat': 'WeChat',
                    'weibo': 'Weibo',
                    'linkedin': 'LinkedIn',
                    // Home Page Features
                    'feature_tech': 'Innovative Technology',
                    'feature_tech_desc': 'Continuous innovation, leading industry development',
                    'feature_global': 'Global Vision',
                    'feature_global_desc': 'Local presence, global perspective',
                    'feature_sustainable': 'Sustainable Development',
                    'feature_sustainable_desc': 'Environmental protection, creating future together',
                    // News Page Content
                    'news1_title': 'GHE Launches New Generation AI Solution',
                    'news1_desc': 'GHE today announced the launch of a new generation AI solution that will significantly improve enterprise operational efficiency...',
                    'news2_title': 'Q1 2024 Financial Report Released',
                    'news2_desc': 'GHE today released its Q1 2024 financial report, showing 25% revenue growth and 30% net profit increase...',
                    'news3_title': 'GHE Participates in 2024 Global Tech Innovation Summit',
                    'news3_desc': 'GHE will participate as a major sponsor in the 2024 Global Tech Innovation Summit, showcasing latest technological achievements...',
                }
            };

            // 更新所有带有 data-lang-key 属性的元素
            document.querySelectorAll('[data-lang-key]').forEach(element => {
                const key = element.getAttribute('data-lang-key');
                if (key && translations[selectedLanguage][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[selectedLanguage][key];
                    } else {
                        element.textContent = translations[selectedLanguage][key];
                    }
                }
            });

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
                const key = link.getAttribute('data-lang-key');
                if (key && translations[selectedLanguage][key]) {
                    link.textContent = translations[selectedLanguage][key];
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