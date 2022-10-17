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

export function ConsumeInputFormatter(value) {
    if (!Number(value)) return "0,00";
  
    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
    .format(value / 100)
    .replace("R$", "")
    .trim();
  
    return `${amount}`;
}

export function GasPriceInputFormatter(value) {
    if (!Number(value)) return "R$ 0,00";
  
    const amount = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(value / 100);
  
    return `${amount}`;
}
export const possibleProfilePicture = [
    require(`../../../assets/peep/peep-1.png`),
    require(`../../../assets/peep/peep-2.png`),
    require(`../../../assets/peep/peep-3.png`),
    require(`../../../assets/peep/peep-4.png`),
    require(`../../../assets/peep/peep-5.png`),
    require(`../../../assets/peep/peep-6.png`),
    require(`../../../assets/peep/peep-7.png`),
    require(`../../../assets/peep/peep-8.png`),
    require(`../../../assets/peep/peep-9.png`),
    require(`../../../assets/peep/peep-10.png`),
    require(`../../../assets/peep/peep-11.png`),
    require(`../../../assets/peep/peep-12.png`),
    require(`../../../assets/peep/peep-13.png`),
    require(`../../../assets/peep/peep-14.png`),
    require(`../../../assets/peep/peep-15.png`),
    require(`../../../assets/peep/peep-16.png`),
    require(`../../../assets/peep/peep-17.png`),
    require(`../../../assets/peep/peep-18.png`),
    require(`../../../assets/peep/peep-19.png`),
    require(`../../../assets/peep/peep-20.png`),
    require(`../../../assets/peep/peep-21.png`),
    require(`../../../assets/peep/peep-22.png`),
    require(`../../../assets/peep/peep-23.png`),
    require(`../../../assets/peep/peep-24.png`),
    require(`../../../assets/peep/peep-25.png`),
    require(`../../../assets/peep/peep-26.png`),
    require(`../../../assets/peep/peep-27.png`),
    require(`../../../assets/peep/peep-28.png`),
    require(`../../../assets/peep/peep-29.png`),
    require(`../../../assets/peep/peep-30.png`),
    require(`../../../assets/peep/peep-32.png`),
    require(`../../../assets/peep/peep-33.png`),
    require(`../../../assets/peep/peep-34.png`),
    require(`../../../assets/peep/peep-35.png`),
    require(`../../../assets/peep/peep-36.png`),
    require(`../../../assets/peep/peep-37.png`),
    require(`../../../assets/peep/peep-38.png`),
    require(`../../../assets/peep/peep-39.png`),
    require(`../../../assets/peep/peep-40.png`),
    require(`../../../assets/peep/peep-41.png`),
    require(`../../../assets/peep/peep-42.png`),
    require(`../../../assets/peep/peep-43.png`),
    require(`../../../assets/peep/peep-44.png`),
    require(`../../../assets/peep/peep-45.png`),
    require(`../../../assets/peep/peep-46.png`),
    require(`../../../assets/peep/peep-47.png`),
    require(`../../../assets/peep/peep-48.png`),
    require(`../../../assets/peep/peep-49.png`),
    require(`../../../assets/peep/peep-50.png`),
    require(`../../../assets/peep/peep-51.png`),
    require(`../../../assets/peep/peep-52.png`),
    require(`../../../assets/peep/peep-53.png`),
    require(`../../../assets/peep/peep-54.png`),
    require(`../../../assets/peep/peep-55.png`),
    require(`../../../assets/peep/peep-56.png`),
    require(`../../../assets/peep/peep-57.png`),
    require(`../../../assets/peep/peep-58.png`),
    require(`../../../assets/peep/peep-59.png`),
    require(`../../../assets/peep/peep-60.png`),
    require(`../../../assets/peep/peep-61.png`),
    require(`../../../assets/peep/peep-62.png`),
    require(`../../../assets/peep/peep-63.png`),
    require(`../../../assets/peep/peep-64.png`),
    require(`../../../assets/peep/peep-65.png`),
    require(`../../../assets/peep/peep-66.png`),
    require(`../../../assets/peep/peep-67.png`),
    require(`../../../assets/peep/peep-68.png`),
    require(`../../../assets/peep/peep-69.png`),
    require(`../../../assets/peep/peep-70.png`),
    require(`../../../assets/peep/peep-71.png`),
    require(`../../../assets/peep/peep-72.png`),
    require(`../../../assets/peep/peep-73.png`),
    require(`../../../assets/peep/peep-74.png`),
    require(`../../../assets/peep/peep-75.png`),
    require(`../../../assets/peep/peep-76.png`),
    require(`../../../assets/peep/peep-77.png`),
    require(`../../../assets/peep/peep-78.png`),
    require(`../../../assets/peep/peep-79.png`),
    require(`../../../assets/peep/peep-80.png`),
    require(`../../../assets/peep/peep-81.png`),
    require(`../../../assets/peep/peep-82.png`),
    require(`../../../assets/peep/peep-83.png`),
    require(`../../../assets/peep/peep-84.png`),
    require(`../../../assets/peep/peep-85.png`),
    require(`../../../assets/peep/peep-86.png`),
    require(`../../../assets/peep/peep-87.png`),
    require(`../../../assets/peep/peep-88.png`),
    require(`../../../assets/peep/peep-89.png`),
    require(`../../../assets/peep/peep-90.png`),
    require(`../../../assets/peep/peep-91.png`),
    require(`../../../assets/peep/peep-92.png`),
    require(`../../../assets/peep/peep-93.png`),
    require(`../../../assets/peep/peep-94.png`),
    require(`../../../assets/peep/peep-95.png`),
    require(`../../../assets/peep/peep-96.png`),
    require(`../../../assets/peep/peep-97.png`),
    require(`../../../assets/peep/peep-98.png`),
    require(`../../../assets/peep/peep-99.png`),
    require(`../../../assets/peep/peep-100.png`),
    require(`../../../assets/peep/peep-101.png`),
    require(`../../../assets/peep/peep-102.png`),
    require(`../../../assets/peep/peep-103.png`),
    require(`../../../assets/peep/peep-104.png`),
    require(`../../../assets/peep/peep-105.png`),
  ]