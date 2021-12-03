module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '9/10': '97.2%',
        rl: '182px',
        sm: '130px',
        lg: '1220px'
      },
      height: {
        sm: '50px',
        ssm: '35px'
      },
      spacing: {
        sm: '10px',
        rl: '18px'
      },
      colors: {
        wt: '#fafafa',
        gr: '#ccc',
        bl: '#0d6efd',
        bls: '#0b5ed7',
        bll: '#0a58ca'
      },
      boxShadow: {
        sm: '-1px 1px 2px 1px rgb(0 0 0 / 7%), -1px 1px 2px 0px rgb(255 255 255 / 15%) inset'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
