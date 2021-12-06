module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '9/10': '97.2%',
        rl: '182px',
        sm: '130px',
        lg: '1220px',
        md: '50px',
        xl: '350px'
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
        bll: '#0a58ca',
        grs: '#e5e5e5',
        cl: 'rgba(66, 133, 244, 0.1)'
      },
      boxShadow: {
        sm: '-1px 1px 2px 1px rgb(0 0 0 / 7%), -1px 1px 2px 0px rgb(255 255 255 / 15%) inset',
        md: '0px 1px 4px 0px rgb(0 0 0 / 5%)',
        xl: '0px 0px 1px 0px #4285f4'
      },
      borderRadius: {
        sm: '3px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
