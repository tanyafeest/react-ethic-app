var ngapp_user_common = angular.module("UserCommon", ["ngSanitize",
    "api-params", "ui.bootstrap", "ui-notification",
    "pascalprecht.translate", "ngRoute"]
);

// Translations
ngapp_user_common.config(function($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    $translateProvider.useStaticFilesLoader({
        prefix: 'assets/i18n/', 
        suffix: '.json'
    });

    // Set default language
    $translateProvider.preferredLanguage('es');
});

import { LoginController } from "../../controllers/login_controller.js";
import { RegisterController } from "../../controllers/register_controller.js";

ngapp_user_common.controller("LoginController", ['$scope', '$http', '$translate', LoginController]);
ngapp_user_common.controller("RegisterController", 
    ['$scope', '$http', '$translate', 'apiParams', RegisterController]);
