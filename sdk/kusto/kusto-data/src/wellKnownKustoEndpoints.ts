export interface WellKnownKustoEndpoints {
  _Comments: string[];
  AllowedEndpointsByLogin: Record<string, WellKnownKustoEndpoint>;
}

export interface WellKnownKustoEndpoint {
  AllowedKustoSuffixes: string[];
  AllowedKustoHostnames: string[];
}

const json = 
`{
    "_Comments": [
        "KWE .linkedin.com suffix is excluded from list pending a more specific suffix",
        "LogAnalytics, AppInsigts & AzureMonitor are taken from https://msazure.visualstudio.com/One/_wiki/wikis/One.wiki/138095/Calling-the-ADX-Proxy following talk with Raz Ronen",
        "The two DXP suffixes come from KWE code",
        "The PlayFab suffixes are a superset of KWE and PowerBI Kusto Connector code",
        "Aria hostname is fixed"
    ],
    "AllowedEndpointsByLogin": {
        "https://login.microsoftonline.com": {
            "AllowedKustoSuffixes": [
                ".dxp.aad.azure.com",
                ".dxp-dev.aad.azure.com",
                ".kusto.azuresynapse.net",
                ".kusto.windows.net",
                ".kustodev.azuresynapse-dogfood.net",
                ".kustodev.windows.net",
                ".kustomfa.windows.net",
                ".playfabapi.com",
                ".playfab.com"
            ],
            "AllowedKustoHostnames": [
                "ade.applicationinsights.io",
                "ade.loganalytics.io",
                "adx.aimon.applicationinsights.azure.com",
                "adx.applicationinsights.azure.com",
                "adx.int.applicationinsights.azure.com",
                "adx.int.loganalytics.azure.com",
                "adx.int.monitor.azure.com",
                "adx.loganalytics.azure.com",
                "adx.monitor.azure.com",
                "kusto.aria.microsoft.com",
                "eu.kusto.aria.microsoft.com"
            ]
        },
        "https://login.microsoftonline.us": {
            "AllowedKustoSuffixes": [".kusto.usgovcloudapi.net", ".kustomfa.usgovcloudapi.net"],
            "AllowedKustoHostnames": ["adx.applicationinsights.azure.us", "adx.loganalytics.azure.us", "adx.monitor.azure.us"]
        },
        "https://login.partner.microsoftonline.cn": {
            "AllowedKustoSuffixes": [".kusto.azuresynapse.azure.cn", ".kusto.chinacloudapi.cn", ".kustomfa.chinacloudapi.cn", ".playfab.cn"],
            "AllowedKustoHostnames": ["adx.applicationinsights.azure.cn", "adx.loganalytics.azure.cn", "adx.monitor.azure.cn"]
        },
        "https://login.microsoftonline.eaglex.ic.gov": {
            "AllowedKustoSuffixes": [".kusto.core.eaglex.ic.gov", ".kustomfa.core.eaglex.ic.gov"],
            "AllowedKustoHostnames": ["adx.applicationinsights.azure.eaglex.ic.gov", "adx.loganalytics.azure.eaglex.ic.gov", "adx.monitor.azure.eaglex.ic.gov"]
        },
        "https://login.microsoftonline.microsoft.scloud": {
            "AllowedKustoSuffixes": [".kusto.core.microsoft.scloud", ".kustomfa.core.microsoft.scloud"],
            "AllowedKustoHostnames": [
                "adx.applicationinsights.azure.microsoft.scloud",
                "adx.loganalytics.azure.microsoft.scloud",
                "adx.monitor.azure.microsoft.scloud"
            ]
        }
    }
}`;

export const endpointsData = JSON.parse(json) as WellKnownKustoEndpoints;
