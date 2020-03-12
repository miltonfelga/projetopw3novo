<?php
namespace App\Http\Controllers;

use App\Comentario;
use Illuminate\Http\Request;


class ComentariosController extends BaseController
{
    public function __construct()
    {
        $this->classe = Comentario::class;
    }

    public function store(Request $request, $projeto_id)
    {
        return response()
            ->json(
                $this->classe::create(
                    [
                        'comentario' => $request->comentario,
                        'projeto_id' => $projeto_id,
                    ] 
                ),
                201
            );
    }

}
