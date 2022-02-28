import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import i18n from './../../../../config/i18n/I18n'
import SelectorSwitch, {
    SelectorOptionItem,
    SelectorSwitchProps
} from "../../../../components/list_items/switchs/Selector.switch";
import {ThemeStoreProvider} from "../../../../contexts/theme/Theme.context";

describe('Selector Switch', () => {
    i18n.changeLanguage('cimode')
    const onChangeCallback = jest.fn()
    const onSelectorChangeCallback = jest.fn()
    const options: SelectorOptionItem[] = [
        {
            title: "Value 1",
            value: "value1",
        },
        {
            title: "Value 2",
            value: "value2",
        },
        {
            title: "Value 3",
            value: "value3",
        }
    ]

    let selectorSwitchProps: SelectorSwitchProps = {
        title: 'test title',
        switchProps: {
            name: 'test',
            checked: false,
            onChange(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
                onChangeCallback(event.target.name, checked)
            },
            optionValue: "value1",
            options,
            onSelectorChange(event: React.ChangeEvent<HTMLInputElement> | (Event & { target: { value: any; name: string } })) {
                onSelectorChangeCallback(event.target.value)
            }
        }
    }
    const selectorSwitchComponent = <SelectorSwitch switchProps={selectorSwitchProps.switchProps}
                                                  title={selectorSwitchProps.title} />

    const themeProviderWrapper = <ThemeStoreProvider>{selectorSwitchComponent}</ThemeStoreProvider>

    beforeEach(() => jest.clearAllMocks())

    it('should be works when passing the right props', () => {
        render(themeProviderWrapper)

        const text = screen.getByText('test title')
        const optionValueDefault = screen.getByText('Value 1')

        expect(text).toBeInTheDocument()
        expect(optionValueDefault).toBeInTheDocument()
    })

    it('should be able to change your switch checked status', () => {
        const {getByRole} = render(themeProviderWrapper)

        fireEvent.click(getByRole('checkbox'))
        fireEvent.change(getByRole('checkbox'), { target: { checked: true } })

        expect(getByRole('checkbox')).toHaveProperty('checked', true)
        expect(onChangeCallback).toHaveBeenCalledTimes(1)
        expect(onChangeCallback).toHaveBeenCalledWith(selectorSwitchProps.switchProps.name, true)
    })

    it('should be blocked the selector when switch is false', function () {
        const {getByText} = render(themeProviderWrapper)

        expect(getByText('Value 1')).toHaveAttribute('aria-disabled', "true")
    });

    it('should be able change the option value while switch is on', () => {
        selectorSwitchProps.switchProps.checked = true
        const {getByRole, getAllByRole} = render(
            <ThemeStoreProvider>
                <SelectorSwitch switchProps={selectorSwitchProps.switchProps}
                                title={selectorSwitchProps.title} />
            </ThemeStoreProvider>
        )

        const selector = getByRole("button");
        fireEvent.mouseDown(selector);

        const [, secondOption] = getAllByRole("option");
        const [, secondOptionChosen] = options

        fireEvent.click(secondOption)

        expect(onSelectorChangeCallback).toHaveBeenCalledTimes(1)
        expect(onSelectorChangeCallback).toHaveBeenCalledWith(secondOptionChosen.value)
    })
})