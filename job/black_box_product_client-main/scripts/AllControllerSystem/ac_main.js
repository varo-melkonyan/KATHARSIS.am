const ac_main = {
    module_list     : {},
    mdl_index       : -1,
    on_acLoad       : async ()      => {
        ac_main.module_list =  (await ac_network.load_modules()).modulesArr;
        ac_view.drawModulesList(ac_main.module_list);
        ac_view.toggleLoadingScreen();
    },

    on_moduleSet    : async (index) => {
        ac_sidebar.showSideBar(ac_main.module_list[index].name.toUpperCase());
        ac_main.mdl_index = index;
        await ac_sidebar.configSideBar(ac_main.module_list[index]);
    },

    on_moduleSelect : async (index) => {
        if (ac_main.mdl_index === index) {
            ac_details.hide_container();
            ac_sidebar.hideSideBar();
            ac_main.mdl_index = -1;
        }
        else {
            ac_sidebar.showSideBar(ac_main.module_list[index].name.toUpperCase());
            ac_main.mdl_index = index;
            await ac_sidebar.configSideBar(ac_main.module_list[index]);
        }
    }
};

$(ac_main.on_acLoad());