export const getDataPropsBtn = (theme) =>{
  return {
    color: {
      blue: {
        color: theme.clrField04,
        backgroundColor: theme.clrBrand01,
        ':hover': {
          backgroundColor: '#1e88da'
        }
      },
      green: {
        color: theme.clrField04,
        backgroundColor: theme.clrBrand03,
        ':hover': {
          backgroundColor: '#50ca00'
        }
      },
      pink: {
        color: theme.clrField04,
        backgroundColor: theme.clrBrand02,
        ':hover' : {
          backgroundColor: '#cb1552'
        }
      }
    },
    size: {
      large: {
        padding: '13px 45px',
        fontSize: '18px'
      },
      small: {
        padding: '6px 23px',
        fontSize: '12px'
      },
      default: {
        padding: '10px 45px',
        fontSize: '16px'
      }
    }
  }
}
