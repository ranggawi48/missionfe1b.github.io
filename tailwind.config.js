/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#18181d",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "bg-login":
          "url('https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "bg-register":
          "url('https://s3-alpha-sig.figma.com/img/7029/d866/6a0bc64361956279c8e2ad111b7e1ee4?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZNbjDW2PUVuIE525a89m~5Skf8f1scyZVruB4H-SXl0VmpizZA4miG6ZUJsn3bFUxWEKMeutFqA21-oQlZHJLcxLkw8TmeW5bqUVoBJ6dq~0WxztKV7H2sdTI6VDdg6p3rYT2nZd5055CjUQ-tJtasGZ~-mEq~MOo-id7Sw0JAGjcKF05T~cUzH~79gW2f93uQSnqWxygI7lT79QBWQpDVhafgOcK4KlheJFH4d598Pe-ie0St~LOarEkagwHeCRfYiT4nRPfiREQdUYckPPFTOAGJjdXXZ-mm81PO7--09uGfkLejCWTnpRHph6ajlhhycOEHq3WLgAeq60GFpFpQ__')",
      },
    },
  },
  plugins: [],
};

