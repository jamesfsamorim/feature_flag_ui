import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import StandardSwitch, {StandardSwitchProps} from "../../../../components/list_items/switchs/Standard.switch";
import i18n from './../../../../config/i18n/I18n'
import {ThemeStoreProvider} from "../../../../contexts/theme/Theme.context";

describe('Standard Switch', () => {
    i18n.changeLanguage('cimode')
    const onChangeCallback = jest.fn()
    let standardSwitchProps: StandardSwitchProps = {
        title: 'test title',
        switchProps: {
            name: 'test',
            checked: false,
            onChange(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
                onChangeCallback(event.target.name, checked)
            }
        }
    }
    let standardSwitchComponent = <StandardSwitch switchProps={standardSwitchProps.switchProps}
                                                  title={standardSwitchProps.title} />

    const themeProviderWrapper = <ThemeStoreProvider>{standardSwitchComponent}</ThemeStoreProvider>

    it('should be works when passing the right props', () => {
        render(themeProviderWrapper)

        const text = screen.getByText('test title')
        expect(text).toBeInTheDocument()
    })

    it('should be able to change your switch checked status', () => {
        const {getByRole} = render(themeProviderWrapper)

        fireEvent.click(getByRole('checkbox'))
        fireEvent.change(getByRole('checkbox'), { target: { checked: true } })

        expect(getByRole('checkbox')).toHaveProperty('checked', true)
        expect(onChangeCallback).toHaveBeenCalledTimes(1)
        expect(onChangeCallback).toHaveBeenCalledWith(standardSwitchProps.switchProps.name, true)
    })
})