import {GeneralPanelChecked, GeneralPanelProps} from "../../../../pages/feature_flag/panels/General.panel";

const mockGeneralContent: GeneralPanelChecked = {
    case_management: false,
    map_timeline: true,
    mass_communications: true,
    notifications: false,
    traffic_cameras: true,
    views_briefings: false,
}

const mockGeneralStatus: GeneralPanelProps = {
    checked: mockGeneralContent
}

export const getMockGeneralContent = async (): Promise<GeneralPanelProps> => {
    return new Promise(() => setTimeout(() => mockGeneralStatus, 1000))
}