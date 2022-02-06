import {AlertsPanelChecked, AlertsPanelOptionValue, AlertsPanelProps} from "../Alerts.panel";

export const alertsContent = [
    {
        title: "feature_flag.panels.alerts.alert_manager",
        type: 'standard',
        switchProps: {
            name: "alert_manager"
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

const emptyAlertsChecked: AlertsPanelChecked = {
    alert_manager: false,
    alert_rules: false,
}

const emptyAlertsOptionValue: AlertsPanelOptionValue = {
    alert_rules: 10
}

export const emptyAlertsStatus: AlertsPanelProps = {
    checked: emptyAlertsChecked,
    optionValue: emptyAlertsOptionValue
}