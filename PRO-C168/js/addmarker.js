AFRAME.registerComponent("create-markers", {
    init : async function(){
        var mainscene=document.querySelector("#main-scene")
        //getdishes from db
        var planes = await this.getplanes()

        planes.map(plane=>{
        var marker=document.createElement("a-marker")
        marker.setAttribute("id",plane.id)
        marker.setAttribute("type","pattern")
        marker.setAttribute("url",dish.marker_pattern_url)
        marker.setAttribute("cursor",{
            rayOrigin:"mouse"
        })
        marker.setAttribute("markerhandler",{})

        //adding 3d model to scene
        var model=document.createElement("a-entity")
        model.setAttribute("id",`model-${plane.id}`)
        model.setAttribute("position",plane.model_geometry.position)
        model.setAttribute("rotation",plane.model_geometry.rotation)
        model.setAttribute("scale",plane.model_geometry.scale)

        model.setAttribute('gltf-model',`url(${plane.model_geometry.marker_model_url})`)
        model.setAttribute('gesture-handler',{})
        marker.appendChild(model)

        //i am drawing a plane for ingredients
        })
        },
        getplanes : async function()
        {
        return await firebase.firestore().collection("planes").get().then(snap=>{
        return snap.docs.map(doc=>{
        doc.data()
        })
        })
        
        }
})