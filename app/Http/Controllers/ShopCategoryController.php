<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class ShopCategoryController extends Controller
{
    public function Men()
    {
        return Inertia::render('Men');
    }
    public function Women()
    {
        return Inertia::render('Women');
    }
    public function Kids()
    {
        return Inertia::render('Kids');
    }
    public function Cart()
    {
        return Inertia::render('Cart');
    }
}
