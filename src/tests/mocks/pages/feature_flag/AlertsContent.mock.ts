import {
    AlertsPanelChecked,
    AlertsPanelOptionValue,
    AlertsPanelProps
} from "../../../../pages/feature_flag/panels/Alerts.panel";

const mockAlertsChecked: AlertsPanelChecked = {
    alert_manager: false,
    alert_rules: true,
}

const mockAlertsOptionValue: AlertsPanelOptionValue = {
    alert_rules: 10
}

const mockAlertsStatus: AlertsPanelProps = {
    checked: mockAlertsChecked,
    optionValue: mockAlertsOptionValue
}

export const getMockAlertsContent = async (): Promise<AlertsPanelProps> => {
    return new Promise(() => setTimeout(() => mockAlertsStatus, 1000))}