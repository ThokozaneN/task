const { createApp, ref, onMounted, onUnmounted } = Vue;

        createApp({
            setup() {
                const isDarkMode = ref(false);
                const activeTab = ref('daily');
                const mobileNavOpen = ref(false);
                const sectionVisible = ref({
                    dashboard: false,
                    features: false,
                    productivity: false,
                    collaboration: false,
                    gamification: false,
                    mobile: false,
                    smart: false
                });
                
                const priorityIcons = {
                    high: 'fa-fire',
                    medium: 'fa-thermometer-half',
                    low: 'fa-thermometer-quarter'
                };
                
                const currentProverb = ref({
                    text: "If you want to go quickly, go alone. If you want to go far, go together.",
                    origin: "African Proverb"
                });
                
                const proverbs = [
                    { text: "If you want to go quickly, go alone. If you want to go far, go together.", origin: "African Proverb" },
                    { text: "The child who is not embraced by the village will burn it down to feel its warmth.", origin: "African Proverb" },
                    { text: "Smooth seas do not make skillful sailors.", origin: "African Proverb" },
                    { text: "He who learns, teaches.", origin: "Ethiopian Proverb" },
                    { text: "A tree is known by its fruit.", origin: "African Proverb" },
                    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", origin: "African Proverb" }
                ];
                
                const paymentMethods = [
                    { name: "M-Pesa", icon: "fas fa-mobile-alt" },
                    { name: "Airtel Money", icon: "fas fa-signal" },
                    { name: "MTN Mobile Money", icon: "fas fa-sim-card" },
                    { name: "Flutterwave", icon: "fas fa-credit-card" },
                    { name: "Paystack", icon: "fas fa-money-bill-wave" }
                ];
                
                const africanFeatures = [
                    {
                        icon: "fas fa-money-bill-wave",
                        title: "Local Payment Integration",
                        description: "Seamlessly pay with M-Pesa, Airtel Money, MTN Mobile Money, and other local payment methods."
                    },
                    {
                        icon: "fas fa-users",
                        title: "Community Boards",
                        description: "Public/shared boards for local groups, schools, NGOs, or co-ops to collaborate effectively."
                    },
                    {
                        icon: "fas fa-quote-left",
                        title: "Proverb of the Day",
                        description: "Start your day with inspirational African wisdom and motivational quotes."
                    },
                    {
                        icon: "fas fa-compress-arrows-alt",
                        title: "Data Saver Mode",
                        description: "Optimize graphics and animations for users with limited internet connectivity."
                    }
                ];
                
                const productivityFeatures = [
                    {
                        icon: "fas fa-robot",
                        title: "AI Task Suggestions",
                        description: "Get smart priorities and scheduling based on your habits and preferences."
                    },
                    {
                        icon: "fas fa-calendar-check",
                        title: "Smart Deadlines",
                        description: "Intelligent reminders that adjust based on urgency and available time."
                    },
                    {
                        icon: "fas fa-sync",
                        title: "Recurring Tasks",
                        description: "Automate repeating tasks with daily, weekly, or monthly schedules."
                    },
                    {
                        icon: "fas fa-hourglass-half",
                        title: "Focus Mode",
                        description: "Pomodoro timer with African-inspired background sounds for deep work."
                    }
                ];
                
                const collaborationFeatures = [
                    {
                        icon: "fas fa-microphone",
                        title: "Voice Notes in Tasks",
                        description: "Add quick voice memos instead of typing for faster task creation."
                    },
                    {
                        icon: "fas fa-user-friends",
                        title: "Task Delegation",
                        description: "Assign tasks to friends, family, or colleagues with just one tap."
                    },
                    {
                        icon: "fas fa-chart-line",
                        title: "Team Goals Tracker",
                        description: "Shared progress bars for collective projects and team objectives."
                    },
                    {
                        icon: "fas fa-poll",
                        title: "In-App Polls/Voting",
                        description: "Quick decision-making tools for teams to prioritize tasks efficiently."
                    }
                ];
                
                const gamificationFeatures = [
                    {
                        icon: "fas fa-chart-pie",
                        title: "Habit Tracking",
                        description: "Track routines like exercise, study, or budgeting alongside your tasks."
                    },
                    {
                        icon: "fas fa-medal",
                        title: "Streak Rewards",
                        description: "Daily streak encouragement with beautiful African-inspired badges."
                    },
                    {
                        icon: "fas fa-fireworks",
                        title: "Mini Celebrations",
                        description: "Enjoy confetti, music, or animations when completing important tasks."
                    },
                    {
                        icon: "fas fa-store",
                        title: "Template Marketplace",
                        description: "Share and download community-created task templates for various needs."
                    }
                ];
                
                const mobileFeatures = [
                    {
                        icon: "fas fa-wifi",
                        title: "Offline Mode",
                        description: "Work without internet connection and sync your data when you're back online."
                    },
                    {
                        icon: "fas fa-qrcode",
                        title: "QR Task Sharing",
                        description: "Generate and scan QR codes to instantly share tasks and projects."
                    },
                    {
                        icon: "fas fa-sync",
                        title: "Cross-Device Sync",
                        description: "Seamlessly continue tasks across phone, tablet, and desktop devices."
                    },
                    {
                        icon: "fas fa-calendar",
                        title: "Calendar Integration",
                        description: "Sync with Google, Outlook, or Apple Calendar for unified scheduling."
                    },
                    {
                        icon: "fas fa-file-export",
                        title: "Export/Reports",
                        description: "Export tasks and progress to PDF/Excel for work or school reporting."
                    }
                ];
                
                const smartFeatures = [
                    {
                        icon: "fas fa-microphone-alt",
                        title: "Voice Assistant Integration",
                        description: "Add tasks via voice commands with Alexa, Google Assistant, or Siri."
                    },
                    {
                        icon: "fas fa-brain",
                        title: "AI Productivity Coach",
                        description: "Weekly insights on your time usage and personalized improvement suggestions."
                    },
                    {
                        icon: "fas fa-fire",
                        title: "Priority Heatmap",
                        description: "Visual dashboard showing urgent vs. low-priority tasks at a glance."
                    },
                    {
                        icon: "fas fa-map-marker-alt",
                        title: "Context Awareness",
                        description: "Smart task suggestions based on your location (work, school, home)."
                    }
                ];
                
                const columns = ref([
                    {
                        title: 'To Do',
                        tasks: [
                            {
                                title: 'Design onboarding flow',
                                description: 'Create wireframes for the new user onboarding process',
                                due: 'Tomorrow',
                                priority: 'high'
                            },
                            {
                                title: 'Research competitors',
                                description: 'Analyze similar apps in the African market',
                                due: 'Sep 30',
                                priority: 'medium'
                            }
                        ]
                    },
                    {
                        title: 'In Progress',
                        tasks: [
                            {
                                title: 'Develop task editor',
                                description: 'Implement the task detail editing functionality',
                                due: 'Today',
                                priority: 'high'
                            },
                            {
                                title: 'Create marketing plan',
                                description: 'Develop Q4 marketing strategy',
                                due: 'Oct 15',
                                priority: 'medium'
                            }
                        ]
                    },
                    {
                        title: 'Done',
                        tasks: [
                            {
                                title: 'Create logo concepts',
                                description: 'Design 3 options for the app logo',
                                due: 'Completed',
                                priority: 'low'
                            },
                            {
                                title: 'Set up social media',
                                description: 'Create accounts on all major platforms',
                                due: 'Completed',
                                priority: 'low'
                            }
                        ]
                    }
                ]);
                
                const toggleTheme = () => {
                    isDarkMode.value = !isDarkMode.value;
                    document.body.classList.toggle('dark-mode', isDarkMode.value);
                };
                
                const toggleMobileNav = () => {
                    mobileNavOpen.value = !mobileNavOpen.value;
                };
                
                const moveTask = (task) => {
                    // Simple animation for demo
                    const taskCards = document.querySelectorAll('.task-card');
                    taskCards.forEach(card => {
                        if (card.querySelector('h5').textContent === task.title) {
                            card.style.transform = 'scale(0.95)';
                            setTimeout(() => {
                                card.style.transform = 'scale(1)';
                            }, 200);
                        }
                    });
                    
                    // For demo purposes, randomly move task between columns
                    if (Math.random() > 0.5) {
                        // Remove from current column
                        columns.value.forEach(column => {
                            const index = column.tasks.findIndex(t => t.title === task.title);
                            if (index !== -1) {
                                column.tasks.splice(index, 1);
                            }
                        });
                        
                        // Add to random column
                        const randomColumnIndex = Math.floor(Math.random() * columns.value.length);
                        columns.value[randomColumnIndex].tasks.push(task);
                    }
                };
                
                const showConfetti = () => {
                    // Create confetti elements
                    for (let i = 0; i < 30; i++) {
                        createConfetti();
                    }
                    
                    // Show achievement popup
                    setTimeout(() => {
                        alert('Achievement Unlocked: First Step to Productivity! \n\n"Little by little, the bird builds its nest." - African Proverb');
                    }, 800);
                };
                
                const createConfetti = () => {
                    const confetti = document.createElement('div');
                    confetti.classList.add('confetti');
                    document.body.appendChild(confetti);
                    
                    // Random properties
                    const colors = ['#0E7490', '#7E22CE', '#F59E0B', '#10B981'];
                    const size = Math.random() * 10 + 5;
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    
                    // Set initial properties
                    confetti.style.width = `${size}px`;
                    confetti.style.height = `${size}px`;
                    confetti.style.backgroundColor = color;
                    confetti.style.left = `${Math.random() * window.innerWidth}px`;
                    confetti.style.top = `${window.innerHeight}px`;
                    
                    // Animate
                    const animation = confetti.animate([
                        { 
                            transform: 'translateY(0) rotate(0deg)',
                            opacity: 1
                        },
                        { 
                            transform: `translateY(-${Math.random() * 300 + 200}px) translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`,
                            opacity: 0
                        }
                    ], {
                        duration: Math.random() * 2000 + 1500,
                        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
                    });
                    
                    // Remove after animation
                    animation.onfinish = () => {
                        confetti.remove();
                    };
                };
                
                const handleScroll = () => {
                    const scrollPosition = window.scrollY + window.innerHeight;
                    
                    // Check if sections are in view
                    Object.keys(sectionVisible.value).forEach(section => {
                        const element = document.querySelector(`.${section}`);
                        if (element) {
                            const elementPosition = element.offsetTop;
                            if (scrollPosition > elementPosition + 100) {
                                sectionVisible.value[section] = true;
                            }
                        }
                    });
                };
                
                const rotateProverb = () => {
                    let currentIndex = 0;
                    setInterval(() => {
                        currentIndex = (currentIndex + 1) % proverbs.length;
                        currentProverb.value = proverbs[currentIndex];
                    }, 5000);
                };
                
                onMounted(() => {
                    // Initialize dark mode based on system preference
                    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                        isDarkMode.value = true;
                        document.body.classList.add('dark-mode');
                    }
                    
                    // Add scroll event listener
                    window.addEventListener('scroll', handleScroll);
                    // Initial check
                    handleScroll();
                    
                    // Start rotating proverbs
                    rotateProverb();
                });
                
                onUnmounted(() => {
                    window.removeEventListener('scroll', handleScroll);
                });
                
                return {
                    isDarkMode,
                    activeTab,
                    mobileNavOpen,
                    sectionVisible,
                    currentProverb,
                    paymentMethods,
                    africanFeatures,
                    productivityFeatures,
                    collaborationFeatures,
                    gamificationFeatures,
                    mobileFeatures,
                    smartFeatures,
                    columns,
                    priorityIcons,
                    toggleTheme,
                    toggleMobileNav,
                    moveTask,
                    showConfetti
                };
            }
        }).mount('#app');