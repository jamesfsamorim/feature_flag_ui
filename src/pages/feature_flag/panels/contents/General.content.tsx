import {GeneralPanelChecked, GeneralPanelProps} from "../General.panel";

export const generalContent = [
    {
        title: "feature_flag.panels.general.case_management",
        type: 'standard',
        switchProps: {
            name: "case_management"
        }
    },
    {
        title: "feature_flag.panels.general.map_timeline",
        type: 'standard',
        switchProps: {
            name: "map_timeline"
        }
    },
    {
        title: "feature_flag.panels.general.views_briefings",
        type: 'standard',
        switchProps: {
            name: "views_briefings"
        }
    },
    {
        title: "feature_flag.panels.general.notifications",
        type: 'standard',
        switchProps: {
            name: "notifications"
        }
    },
    {
        title: "feature_flag.panels.general.mass_communications",
        type: 'standard',
        switchProps: {
            name: "mass_communications"
        }
    },
    {
        title: "feature_flag.panels.general.traffic_cameras",
        type: 'standard',
        switchProps: {
            name: "traffic_cameras"
        }
    }
]

const emptyGeneralChecked: GeneralPanelChecked = {
    case_management: false,
    map_timeline: false,
    mass_communications: false,
    notifications: false,
    traffic_cameras: false,
    views_briefings: false,
}

export const emptyGeneralStatus: GeneralPanelProps = {
    checked: emptyGeneralChecked
}