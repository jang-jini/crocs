document.addEventListener("DOMContentLoaded", function () {
    const heroSwiper = new Swiper(".hero-swiper", {
        // 기본 설정
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        // 페이지네이션 설정
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // 이미지 중앙 정렬을 위한 설정
        centeredSlides: true,
        slidesPerView: 1,
        // effect: "fade", // 페이드 효과 추가 (선택사항)
        fadeEffect: {
            crossFade: true,
        },
    });

    const btnTop = document.querySelector(".btn-top");

    // 버튼 초기 상태 설정 (숨김)
    btnTop.style.display = "none";

    // 스크롤 이벤트 리스너
    window.addEventListener("scroll", function () {
        // 스크롤 위치가 200px 이상일 때 버튼 표시
        if (window.scrollY > 500) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });

    // 버튼 클릭 이벤트
    btnTop.addEventListener("click", function (e) {
        e.preventDefault(); // 기본 동작 방지

        // 버튼에 'fly' 클래스 추가
        btnTop.classList.add("fly");

        // 애니메이션 완료 후 실행될 함수
        const onAnimationEnd = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth", // 부드러운 스크롤 효과
            });

            // 스크롤이 완료된 후 버튼 초기화
            setTimeout(() => {
                btnTop.style.display = "none";
                btnTop.classList.remove("fly");
            }, 500); // 스크롤 시간에 맞춰 조정

            // 이벤트 리스너 제거
            btnTop.removeEventListener("animationend", onAnimationEnd);
        };

        // 애니메이션 종료 이벤트 리스너 추가
        btnTop.addEventListener("animationend", onAnimationEnd);
    });

    const menuItems = document.querySelectorAll(".gnb > li");

    menuItems.forEach((item) => {
        const submenu = item.querySelector(".submenu");

        if (submenu) {
            item.addEventListener("mouseenter", () => {
                submenu.classList.add("active");
                setTimeout(() => {
                    submenu.querySelectorAll("li").forEach((li, index) => {
                        setTimeout(() => {
                            li.style.opacity = "1";
                        }, index * 50);
                    });
                }, 50);
            });

            item.addEventListener("mouseleave", () => {
                submenu.classList.remove("active");
                submenu.querySelectorAll("li").forEach((li) => {
                    li.style.opacity = "0";
                });
            });
        }
    });

    const swiper = new Swiper(".products-swiper", {
        // 기본 설정
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,

        // 페이지네이션 설정
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // 네비게이션 화살표 설정
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // 반응형 breakpoints
        breakpoints: {
            // 768px 이상일 때
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            // 1024px 이상일 때
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
});
