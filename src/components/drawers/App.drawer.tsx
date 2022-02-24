import {DrawerDivider, DrawerPaper, IconTitle, AppDrawerComponent} from "./App.drawer.styled";
import Translate from "@mui/icons-material/Translate";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import Palette from "@mui/icons-material/Palette";
import {ThemeContext, ThemeTypes} from "../../contexts/theme/Theme.context";
import React, {useContext, useState} from "react";
import {useTranslation} from "react-i18next";

interface Props {
    isDrawerOpen: boolean
    setIsDrawerOpen(isDrawerOpen: boolean): void
}

const AppDrawer = ({isDrawerOpen, setIsDrawerOpen}: Props) => {
    const {switchTheme, themeType} = useContext(ThemeContext)
    const [language, setLanguage] = useState('en')
    const {t, i18n} = useTranslation()

    const changeLanguage = (language: string) => {
        setLanguage(language)
        i18n.changeLanguage(language)
    }

    return (
        <AppDrawerComponent
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
        >
            <DrawerPaper>
                <IconTitle>
                    <Translate/> <h5>{t('drawer.languages.title')}</h5>
                </IconTitle>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={language}
                        onChange={({target: {value}}) => changeLanguage(value)}
                    >
                        <FormControlLabel value="en" control={<Radio size={'small'}/>}
                                          label={t('drawer.languages.english') as string}/>
                        <FormControlLabel value="pt" control={<Radio size={'small'}/>}
                                          label={t('drawer.languages.portuguese') as string}/>
                    </RadioGroup>
                </FormControl>

                <DrawerDivider/>

                <IconTitle>
                    <Palette/> <h5>{t('drawer.themes.title')}</h5>
                </IconTitle>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={themeType}
                        onChange={({target: {value}}) => switchTheme(value as ThemeTypes)}
                    >
                        <FormControlLabel value="default" control={<Radio/>}
                                          label={t('drawer.themes.default') as string}/>
                        <FormControlLabel value="light" control={<Radio/>}
                                          label={t('drawer.themes.light') as string}/>
                        <FormControlLabel value="blue" control={<Radio/>}
                                          label={t('drawer.themes.blue') as string}/>
                    </RadioGroup>
                </FormControl>
            </DrawerPaper>
        </AppDrawerComponent>
    )
}

export default AppDrawer