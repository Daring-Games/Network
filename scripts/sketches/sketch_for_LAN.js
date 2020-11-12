/**
 * Project Created on 11th of October 2020 by @Sameer_Karna
 * This project's purpose is loading a 3D model of a router to the WebPage of LAN
 * ------------------------------------------------------------------------------
 * This project is a subject to Copyright (c)
 * ------------------------------------------------------------------------------
 * Copyright (c) 2020
 * This program is given to the viewers (as is), to view.
 * This porgram will not be copied.
 * Any means to copy this porject will be handled severely.
 */

/**
 * To understand the code, read the following.
 * @var scene is used to create a scene for the WebGL
 * Other variables such as @renderer @fogColor @camera are elements of the WebGL scene.
 * function @init is used to create the WebGL scene, Meshes, load Models and other elements.
 * function @update is used to update the renderer, so that we can see the animations, frameRates.
 */




/*==========================================================
=------------------=| START OF PROGRAM |=------------------=
==========================================================*/



    //Warning the viewer.
        console.info("This website and its content are a subject to copyright, any means of copying this website and content will be dealt severely");

    //Declaring variables needed for running the program.
        var scene, camera, renderer, fogColor;

    //Calling the @init function to update the prgram constantly.
        init();


    //Function init which has all the assets loaded in the scene.
        function init() {

            //creating a scene.
                scene = new THREE.Scene();
                    scene.background = new THREE.Color(0xbffffd);

            //Fog color.
                fogColor = new THREE.Color(0xffffff);

            //Fog
                scene.fog = new THREE.FogExp2(0xffffff, 1.5);

            //Creating a virtual camera so that we can see the scene.
                camera = new THREE.PerspectiveCamera( 75, 1000 / 700, 0.01, 1000);
                    camera.position.z = 0.2;
                        
            //Creating a renderer which helps in rendering the scene.
                renderer = new THREE.WebGLRenderer();
                    renderer.setSize(1000, 700);
                    document.body.appendChild(renderer.domElement);

            //Creating OrbitControls to help viewer rotate the 3D model.
                const controls = new THREE.OrbitControls( camera, renderer.domElement );

            //To load the 3D model.
                const loader = new THREE.GLTFLoader();

                loader.load('models/router.glb', object => {

                    const router = object.scene.children[0];

                    scene.add(object.scene);
                })

            //Adding lightings.
                const pointLight = new THREE.PointLight(0xffffff, 1);
                    scene.add(pointLight);    
                    pointLight.position.set(1, 9, 1)

                const directional_light = new THREE.DirectionalLight(0xffffff, 2);
                    scene.add(directional_light);

                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                    scene.add(ambientLight);

            //Creating an artificial sun.
                const sun_geometry = new THREE.SphereBufferGeometry(0.1, 30, 30);
                const sun_material = new THREE.MeshBasicMaterial({color: 0xffff00});
                const sun = new THREE.Mesh(sun_geometry, sun_material);
                    scene.add(sun);
                    sun.position.set(1, 4, 1);

            //Calling the update function.
                update();
        }


    //Creating an update function to update the scene.
        function update() {
            requestAnimationFrame( update );
            renderer.render( scene, camera );
        }



/*==========================================================
=-------------------=| END OF PROGRAM |=-------------------=
==========================================================*/
