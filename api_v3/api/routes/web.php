<?php

/** @var \Laravel\Lumen\Routing\Router $router */
$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->group(['prefix' => 'projetos'], function () use ($router) {
        $router->post('', 'ProjetosController@store');
        $router->get('', 'ProjetosController@index');

        $router->group(['prefix' => '{id}'], function () use ($router) {
            $router->get('', 'ProjetosController@show');
            $router->put('', 'ProjetosController@update');
            $router->delete('', 'ProjetosController@destroy');
            $router->post('/comentarios', 'ComentariosController@store');
            $router->get('/comentarios', 'ComentariosController@index');
        });
    
    });
});
