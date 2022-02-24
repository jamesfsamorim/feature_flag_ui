import {
    UserSettingsPanelChecked,
    UserSettingsPanelOptionValue, UserSettingsPanelProps
} from "../../../../pages/feature_flag/panels/UserSettings.panel";

const mockUserSettingsChecked: UserSettingsPanelChecked = {
    audit_log: true,
    users: {
        user_add: true,
        user_update: false,
        user_delete: false,
        user_max_users: false,
    }
}

const mockUserSettingsOptionValue: UserSettingsPanelOptionValue = {
    users: {
        user_max_users: 10
    }
}

const mockUserSettingsStatus: UserSettingsPanelProps = {
    checked: mockUserSettingsChecked,
    optionValue: mockUserSettingsOptionValue
}

export const getMockUserSettingsContent = async (): Promise<UserSettingsPanelProps> => {
    return new Promise((resolve) => setTimeout(() => resolve(mockUserSettingsStatus), 500))}