export const alertsContent = [
    {
        title: "feature_flag.panels.alerts.alert_manager",
        type: 'standard',
        switchProps: {
            name: "user_delete"
        }
    },
    {
        title: "feature_flag.panels.alerts.alert_rules",
        type: 'selector',
        switchProps: {
            name: "alert_rules",
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