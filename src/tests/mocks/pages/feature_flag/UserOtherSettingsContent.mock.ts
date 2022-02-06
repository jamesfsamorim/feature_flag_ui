import {
    UserSettingsPanelChecked,
    UserSettingsPanelOptionValue,
    UserSettingsPanelProps
} from "../../../../pages/feature_flag/panels/UserSettings.panel";

const mockUserOtherSettingsChecked: UserSettingsPanelChecked = {
    audit_log: false,
    users: {
        user_add: false,
        user_update: false,
        user_delete: true,
        user_max_users: true,
    }
}

const mockUserOtherSettingsOptionValue: UserSettingsPanelOptionValue = {
    users: {
        user_max_users: 20
    }
}

const mockUserOtherSettingsStatus: UserSettingsPanelProps = {
    checked: mockUserOtherSettingsChecked,
    optionValue: mockUserOtherSettingsOptionValue
}

export const getMockUserOtherSettingsContent = async (): Promise<UserSettingsPanelProps> => {
    return new Promise(() => setTimeout(() => mockUserOtherSettingsStatus, 2200))}