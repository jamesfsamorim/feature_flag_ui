export const userOtherSettingsContent = [
    {
        title: "feature_flag.panels.user_settings.audit_log",
        switchProps: {
            type: 'standard',
            name: "other_user_audit_log"
        }
    },
    {
        title: "feature_flag.panels.user_settings.users.title",
        switchProps: {
            type: 'group',
            name: "users",
            children: [
                {
                    title: "feature_flag.panels.user_settings.users.add",
                    switchProps: {
                        type: 'standard',
                        name: "user_add"
                    }
                },
                {
                    title: "feature_flag.panels.user_settings.users.update",
                    switchProps: {
                        type: 'standard',
                        name: "user_update"
                    }
                },
                {
                    title: "feature_flag.panels.user_settings.users.delete",
                    switchProps: {
                        type: 'standard',
                        name: "user_delete"
                    }
                },
                {
                    title: "feature_flag.panels.user_settings.users.max_users",
                    switchProps: {
                        type: 'selector',
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