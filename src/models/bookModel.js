export default{
    field_list:{
        customername:{
            label:'客户名',
            editor:'field_string',
            placeholder:'请输入客户名',
            default:'',
        },
        totalprice:{
            label:'金额',
            editor:'field_number',
            default:0,
        },
        address:{
            label:"收货地址",
            editor:"field_text",
        },
        store:{
            label:"店铺",
            editor:"field_async_enum_select",
            default:"",
            uri:"/book/storeList",
            labelfield:"storename",
            valuefield:"_id",
        },
        saler:{
            label:"销售",
            editor:"field_relates_enum_select",
            relates:{
                store:{
                    inValidValue:"",
                    relatefield:"store"
                }
            },
            default:"",
            uri:"book/salerList",
        },
    },
    create_link:'/book/create',
    docreate_link:'/book/docreate',
    baseUrl:"/book/list",
    edit_link:"/book/edit_link",
    doedit_link:'/book/doedit_link',
    filters:[
        {
            "label":"客户名",
            "field":"customername",
            "editor":"field_string",
            "placeholder":"请输入客户名",
            "default":""
        },
        {
            "label":"金额",
            "field":"totalprice",
            "editor":"field_number",
            "default":500,
        }
    ],
    operators:[
        {
            "label":"再来一单",
            "type":"success",
            function(data){
                this.$message({
                    message:data.customername+"再来一单",
                    type:"success",
                    duration:2000
                })
            }
        }

    ]
}