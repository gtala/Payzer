import { makeStyles } from '@material-ui/core/styles'

const useSliderAlangoStyles = makeStyles((theme) => ({
  title: {
    color: 'white',
    fontWeight: 400,
    fontFamily: 'nb-architek',
    fontSize: '20px',
    lineHeight: '25.2px',
    letterSpacing: '6px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '30px 36px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: '30px 16px',
    },
  },
  titlePath: {
    fontSize: 40,
    fontWeight: 300,
    lineHeight: 1.3,
    marginBottom: 20,
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
      marginBottom: 0,
    },
  },
  topCont: {
    lineHeight: 0.5,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginBottom: 0,
    },
  },
  sliderCont: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 100,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.5,
    fontFamily: 'archia',
    margin: '15px 0 30px',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  sliderContMob: {
    position: 'relative',
  },
  buttonLeft: {
    position: 'absolute',
    display: 'inline-block',
    width: '2em',
    height: '2em',
    border: '0.1em solid #FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    cursor: 'pointer',
    left: 100,
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      left: '38%',
      top: -55,
    },
  },
  buttonRight: {
    position: 'absolute',
    display: 'inline-block',
    width: '2em',
    height: '2em',
    border: '0.1em solid #FFFFFF',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    cursor: 'pointer',
    right: 100,
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      right: '38%',
      top: -55,
    },
  },
  img: {
    cursor: 'pointer'
  },
  buttonIcon: {
    position: 'absolute',
    color: 'black',
    margin: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    alignItems: 'center',
  },
  nextButton: {
    transform: 'translate(-50%, -50%) rotate(180deg)',
  },
  sliderContainer: {
    textAlign: 'center',
    padding: '0 65px',
    cursor: 'pointer',
    '& .carousel-item': {
      display: 'flex',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  sliderContainerMobile: {
    textAlign: 'center',
    margin: 'auto',
    marginTop: 50,
    marginBottom: 100,
    '& .carousel-initialized': {
      padding: '0 45px !important',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  buttonViewDropContainer: {
    width: '100%',
    marginTop: '6.7%',
    padding: '0 30px',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '10%',
    },
  },
}))

export default useSliderAlangoStyles
