package com.example.composable

import android.os.Bundle
import android.text.style.BackgroundColorSpan
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.sp
import com.example.composable.R.*

//Now making android UI with simple xml and kotlin file can be very time consuming so we use jetpack composable method  which we weill learn here

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
           Text(text = "Hello Jetpack composble", fontSize = 20.sp,
               color = Color(0xFFF4CE14)
           )
//TO BUILD a composable function fiirst u need to define its parameters as we do it here below now whenever this composable function will be called it will take two argumnets name and size
               RestaurantName(
                   name = stringResource(id = R.string.title),
                    size = 32
                   )


            }
        }
    }

//here is how we call a composable function that we defined above
@Composable
fun RestaurantName(name:String,size:Int){
    print(name)
Text(
    text=name,
    fontSize = size.sp

)

}
//however the est pratice to display composable functon is through a previews function
@Preview(showBackground = true)
@Composable
fun RestaurantNamePreview(){
    RestaurantName(name = stringResource(id = R.string.title), size = 32)

}

