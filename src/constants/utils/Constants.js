import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const headerStyleConfig = { BackgroundColor: '#fff' }
export const fontWeightConfig = { Regular: 'RetniSans-Regular', BoldItalic: 'RetniSans-BoldItalic', Italic: 'RetniSans-Italic', Light: 'RetniSans-Light', LightItalic: 'RetniSans-LightItalic', Medium: 'RetniSans-Medium', MediumItalic: 'RetniSans-MediumItalic', Bold: 'RetniSans-Bold' }
export const fontsLoadedConfig = {'RetniSans-Regular': require('../../../assets/fonts/RetniSans-Regular.ttf'),'RetniSans-BoldItalic': require('../../../assets/fonts/RetniSans-BoldItalic.ttf'),'RetniSans-Italic': require('../../../assets/fonts/RetniSans-Italic.ttf'),'RetniSans-Light': require('../../../assets/fonts/RetniSans-Light.ttf'),'RetniSans-LightItalic': require('../../../assets/fonts/RetniSans-LightItalic.ttf'),'RetniSans-Medium': require('../../../assets/fonts/RetniSans-Medium.ttf'),'RetniSans-MediumItalic': require('../../../assets/fonts/RetniSans-MediumItalic.ttf'),'RetniSans-Bold': require('../../../assets/fonts/RetniSans-Bold.ttf')}
export const colors = {primary: {900: '#551892', 600: '#6E1DBE', 400: '#D4C9E0', 200: '#F3EDFA'}, gray: {0: '#FFFFFF', 100: '#F2F2F3', 400: '#E1E1E4', 600: '#8A8F95', 700: '#686D73', 800: '#19191A'}, support: {Blue: {100: '#E0EDFA', 500: '#1671C5' }, Purple: {100: '#F0E3FC', 500: '#752CBD'}, Green: {100: '#DCF3E5', 500: '#0C663B'}, Red: {100: '#FDEDED', 500: '#C51818'}}}
export const buttonConfig = { 
    Utils: { fontFamily: 'RetniSans-Bold' }, 
    Default: 
    { Primary: 
        { Default: 
            { Width: '100%', Height: '64px' , BackgroundColor: colors.primary[600], Radius: '8px', Padding: '16px', Color: colors.gray[0] }, 
          Small: 
            { Width: '100%', Height: '48px' , BackgroundColor: colors.primary[600], Radius: '8px', Padding: '16px 24px 16px 24px', Color: colors.gray[0] },
        
        },
        Secondary: 
        {
            Default:
            {
                Width: '100%', Height: '64px' , BackgroundColor: colors.gray[0], Radius: '8px', Padding: '16px 24px 16px 24px', Color: colors.primary[600], BorderColor: colors.gray[400], BorderWidth: '1px'
            },
            Small: 
            { 
                Width: '100%', Height: '48px' , BackgroundColor: colors.gray[0], Radius: '8px', Padding: '16px 24px 16px 24px', Color: colors.primary[600] 
            }
        }
    },
    Ontouch: 
    {   
        Primary: 
        {
            Default: 
            {
                Width: '100%', Height: '64px' , BackgroundColor: colors.primary[900], Radius: '8px', Padding: '16px', Color: colors.gray[0]
            },
            Small: 
            {
                Width: '100%', Height: '48px' , BackgroundColor: colors.primary[900], Radius: '8px', Padding: '16px 24px 16px 24px', Color: colors.gray[0]
            }
        },
        Secondary: 
        {
            Default: 
            {
                Width: '100%', Height: '64px' , BackgroundColor: colors.gray[100], Radius: '8px', Padding: '16px 24px 16px 24px', Color: colors.primary[600] 
            },
            Small: 
            {
                Width: '100%', Height: '48px' , BackgroundColor: colors.gray[100], Radius: '8px', Padding: '16px 24px 16px 24px', Color: colors.primary[600]
            }
        }
    }
}
export const inputConfig = {
    Default: 
    {
        Width: '100%', Height: '64px', BackgroundColor: colors.gray[100], Radius: '8px', Padding: '16px', Color: colors.gray[700]
    },
    Ontouch: 
    {
        Login: { Color: colors.primary[600] },
        Settings: { Color: colors.gray[800] }
    },
}
export const fontConfig = { H3: { Bold: { FontSize: '18px', FontFamily: fontWeightConfig.Bold }, Regular: { FontSize: '18px', FontFamily: fontWeightConfig.Regular }, Medium: { FontSize: '18px', FontFamily: fontWeightConfig.Medium}}, Body: { Bold: { FontSize: '16px', FontFamily: fontWeightConfig.Bold }, Regular: { FontSize: '16px' , FontFamily: fontWeightConfig.Regular }, Medium: { FontSize: '16px', FontSizeInt: 16, FontFamily: fontWeightConfig.Medium }}, Sm: { Bold: { FontSize: '14px', FontFamily: fontWeightConfig.Bold }, Regular: { FontSize: '14px', FontFamily: fontWeightConfig.Regular }, Medium: { FontSize: '14px', FontFamily: fontWeightConfig.Medium }}, Xsm: { Bold: { FontSize: '12px', FontFamily: fontWeightConfig.Bold }, Regular: { FontSize: '12px', FontFamily: fontWeightConfig.Regular }, Semibold: { FontSize: '12px', FontFamily: fontWeightConfig.Medium } } }
export const headingConfig = { Title: { FontFamily: fontWeightConfig.Bold, FontSize: '16px', Color: colors.gray[800], BackgroundColor: colors.gray[0] }}
export const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});
export function inputFormatter(value) {
    if (!Number(value)) return "R$ 0,00";
  
    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value / 100);
  
    return `${amount}`;
}