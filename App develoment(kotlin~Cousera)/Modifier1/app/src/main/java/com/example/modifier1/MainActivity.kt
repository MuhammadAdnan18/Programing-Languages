package com.example.modifier1

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.modifier1.ui.theme.Modifier1Theme


//MODIFIERS:are  kotlin objects that allow us tro modify different aspects of composable views,eg a text composable ill le u change the font color but to change the background color u need modifier(they act as a decorator and style user elements
// U can also make objects clickable with
//for better modifiers can chained together through dot(.) to decrease overload of codes eg(Row:line 49)
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            Modifier1Theme {
                // A surface container using the 'background' color from the theme

                    Hello("Android")

            }
        }
    }
}

@Composable
fun Hello(name: String)
{
Row(
    modifier = Modifier.padding(10.dp)
    .height(30.dp)
    .background(Color.LightGray)
        .fillMaxWidth()
    ,
    horizontalArrangement = Arrangement.Center,
    verticalAlignment = Alignment.CenterVertically)
{
    Text(text = "Hello $name!")
}


}
