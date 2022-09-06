const gallery_sys_data = {
    frontURL        : 'https://tumo-product.github.io/smart_gallery/?_uuid=',

    onDeleteSet     : async () => {
        let secretKey = prompt("^^^^^^^^SECRET KEY^^^^^^^^", "0000");
        if(secretKey === ""){
            alert("Invalid Secret Key");
            return;
        }

        let data = {
            _key    : secretKey,
            _uuid   : gallery_handlers.current_dat.uid,
            _iuid   : gallery_handlers.current_dat.iuid
        }

        ac_loading.openLoading();
        let resp = await ac_network.post_request("gallery/removeimage", data);
        ac_details.clean_details();
        await ac_main.on_moduleSet(ac_main.mdl_index);
        ac_loading.closeLoading();
    },

    getURL          : () => {
        let id  = gallery_handlers.current_dat.uuid;
        let url = gallery_sys_data.frontURL + `${id}`;
        prompt("vvvvvvvvvvvvvvvvvv-Grab your URL-vvvvvvvvvvvvvvvvvv", url);
    },

    onCancelEdits   : async () => {
        ac_loading.openLoading();
        await gallery_sys.reset_to_default();
        ac_loading.closeLoading();
    },

    onSaveEdits     : async () => {
        ac_loading.openLoading();
        
        await gallery_handlers.updateData();
        
        let defaultImages   = gallery_sys.def_set_values.images;
        let images          = gallery_handlers.current_dat.images;

        for (let i = 0; i < defaultImages.length; i++) {
            if (images[i] === undefined) {
                let req = {
                    _uid    : ""
                }
                      
                req._uuid   = gallery_handlers.current_dat.uuid;
                req._iuid   = defaultImages[i].iuid;

                let resp = await ac_network.post_request("gallery/removeImage",    req);
            }
        }

        for (let i = 0; i < images.length; i++) {
            if (defaultImages[i] === undefined) {
                let req = {
                    _uid    : ""
                }
                      
                req._uuid   = gallery_handlers.current_dat.uuid;
                req._img1   = images[i].img1;
                req._img2   = images[i].img2;

                let resp = await ac_network.post_request("gallery/addimage",    req);
            }
            else if (images[i].img1  != defaultImages[i].img1) {
                let req = {
                    _uid    : ""
                }
                
                req._iuid   = images[i].iuid;
                req._img1   = images[i].img1;
                req._img2   = images[i].img2;

                let resp = await ac_network.post_request("gallery/updateimage", req);
            }
        }

        await ac_sidebar.configSideBar(ac_sidebar.activeModule);
        ac_loading.closeLoading();
    }
}