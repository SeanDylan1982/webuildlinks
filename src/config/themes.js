import red from '@mui/material/colors/red'
import green from '@mui/material/colors/green'
import pink from '@mui/material/colors/pink'

const themes = [
  {
    id: 'default'
  },
  {
    id: 'light',
    color: red[500],
    source: {
      palette: {
        mode: 'light',
        primary: {
          main: 'rgba(136,41,251,0.56)',
          contrastText: 'rgba(106,255,216,0.8)',
          light: 'rgba(175,161,208,0.71)',
          dark: '#422e8e'
        },
        secondary: {
          main: '#1effbd',
          light: '#7cffcd',
          dark: '#00bb7b',
          contrastText: 'rgba(30,0,255,0.87)'
        },
        background: {
          default: '#f1f1f1',
          paper: 'rgba(43,3,119,0.72)'
        },
        success: {
          main: '#45b74a',
          contrastText: 'rgba(0,64,255,0.91)'
        },
        divider: 'rgba(170,170,170,0.5)',
        text: {
          primary: '#f1f1f1',
          hint: '#564d73',
          secondary: 'rgba(28,28,28,0.8)',
          disabled: 'rgba(76,74,74,0.78)'
        }
      },
      typography: {
        fontFamily: 'Asap'
      },
      spacing: 8,
      shape: {
        borderRadius: 4
      },
      props: {
        MuiTooltip: {
          arrow: true
        },
        MuiButton: {
          size: 'small'
        },
        MuiButtonGroup: {
          size: 'small'
        },
        MuiCheckbox: {
          size: 'small'
        },
        MuiFab: {
          size: 'small'
        },
        MuiFormControl: {
          margin: 'dense',
          size: 'small'
        },
        MuiFormHelperText: {
          margin: 'dense'
        },
        MuiIconButton: {
          size: 'small'
        },
        MuiInputBase: {
          margin: 'dense'
        },
        MuiInputLabel: {
          margin: 'dense'
        },
        MuiRadio: {
          size: 'small'
        },
        MuiSwitch: {
          size: 'small'
        },
        MuiTextField: {
          margin: 'dense',
          size: 'small'
        },
        MuiList: {
          dense: true
        },
        MuiMenuItem: {
          dense: true
        },
        MuiTable: {
          size: 'small'
        }
      },
      overrides: {
        MuiButton: {
          root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px'
          }
        }
      }
    }
  },
  {
    id: 'dark',
    color: red[500],
    source: {
      palette: {
        mode: 'dark',
        primary: {
          main: 'rgba(136,41,251,0.56)',
          contrastText: 'rgba(106,255,216,0.8)',
          light: 'rgba(175,161,208,0.71)',
          dark: '#422e8e'
        },
        secondary: {
          main: '#1effbd',
          light: '#7cffcd',
          dark: '#00bb7b',
          contrastText: 'rgba(30,0,255,0.87)'
        },
        background: {
          default: '#1a1a1a',
          paper: 'rgba(43,3,119,0.77)'
        },
        success: {
          main: '#45b74a',
          contrastText: 'rgba(0,64,255,0.91)'
        },
        divider: 'rgba(170,170,170,0.5)',
        text: {
          primary: '#f1f1f1',
          hint: '#564d73',
          secondary: 'rgba(28,28,28,0.8)',
          disabled: 'rgba(76,74,74,0.78)'
        }
      },
      typography: {
        fontFamily: 'Asap'
      },
      spacing: 8,
      shape: {
        borderRadius: 4
      },
      props: {
        MuiTooltip: {
          arrow: true
        },
        MuiButton: {
          size: 'small'
        },
        MuiButtonGroup: {
          size: 'small'
        },
        MuiCheckbox: {
          size: 'small'
        },
        MuiFab: {
          size: 'small'
        },
        MuiFormControl: {
          margin: 'dense',
          size: 'small'
        },
        MuiFormHelperText: {
          margin: 'dense'
        },
        MuiIconButton: {
          size: 'small'
        },
        MuiInputBase: {
          margin: 'dense'
        },
        MuiInputLabel: {
          margin: 'dense'
        },
        MuiRadio: {
          size: 'small'
        },
        MuiSwitch: {
          size: 'small'
        },
        MuiTextField: {
          margin: 'dense',
          size: 'small'
        },
        MuiList: {
          dense: true
        },
        MuiMenuItem: {
          dense: true
        },
        MuiTable: {
          size: 'small'
        }
      },
      overrides: {
        MuiButton: {
          root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px'
          }
        }
      }
    }
  },
  {
    id: 'red',
    color: red[500],
    source: {
      palette: {
        primary: red,
        secondary: pink,
        error: red
      }
    }
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red
      }
    }
  }
]

export default themes
