import {UserSettingsPanelChecked, UserSettingsPanelOptionValue, UserSettingsPanelProps} from "../UserSettings.panel";

export const userSettingsContent = [
    {
        title: "feature_flag.panels.user_settings.audit_log",
        type: 'standard',
        switchProps: {
            name: "audit_log"
        }
    },
    {
        title: "feature_flag.panels.user_settings.users.title",
        type: 'group',
        switchProps: {
            name: "users",
            children: [
                {
                    title: "feature_flag.panels.user_settings.users.add",
                    type: 'standard',
                    switchProps: {
                        name: "user_add"
                    }
                },
                {
                    title: "feature_flag.panels.user_settings.users.update",
                    type: 'standard',
                    switchProps: {
                        name: "user_update"
                    }
                },
                {
                    title: "feature_flag.panels.user_settings.users.delete",
                    type: 'standard',
                    switchProps: {
                        name: "user_delete"
                    }
                },
                {
                    title: "feature_flag.panels.user_settings.users.max_users",
                    type: 'selector',
                    switchProps: {
                        name: "user_max_users",
                        options: [
                            {
                                title: "10",
                                value: 10,
                            },
                            {
                                title: "15",
                                value: 15,
                            },
                            {
                                title: "20",
                                value: 20,
                            },
                        ]
                    }
                },
            ]
        }
    },
]

const emptyUserSettingsChecked: UserSettingsPanelChecked = {
    audit_log: false,
    users: {
        user_add: false,
        user_update: false,
        user_delete: false,
        user_max_users: false,
    }
}

const emptyUserSettingsOptionValue: UserSettingsPanelOptionValue = {
    users: {
        user_max_users: 15
    }
}

export const emptyUserSettingsStatus: UserSettingsPanelProps = {
    checked: emptyUserSettingsChecked,
    optionValue: emptyUserSettingsOptionValue
}