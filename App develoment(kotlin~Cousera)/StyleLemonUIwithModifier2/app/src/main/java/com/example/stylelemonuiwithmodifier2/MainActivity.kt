package com.example.stylelemonuiwithmodifier2

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.stylelemonuiwithmodifier2.ui.theme.StyleLemonUIwithModifier2Theme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            StyleLemonUIwithModifier2Theme {
                // A surface container using the 'background' color from the theme
                LemonUI()
            }
        }
    }
}

@Composable
fun LemonUI() {
    //First we create a column layout and set the fillMaxwidth property so it doesnt cover the whole screen just the top and leave the remaining space for other featurs .we add two texts Little lemonn an chicago and style them with modifiers
    Column(
        verticalArrangement = Arrangement.Top,
        horizontalAlignment = Alignment.Start,
        modifier = Modifier  .fillMaxWidth()
            .background(color = colorResource(id = R.color.LemonBack))



    ) {
        Text(stringResource(id = R.string.little_lemon), fontSize = 25.sp, color = colorResource(id = R.color.Yellow2),
            modifier = Modifier.padding(top = 10.dp,start = 10.dp)
        )
        Text(stringResource(id = R.string.chicago),fontSize = 20.sp, color = Color.White,
        modifier = Modifier.padding( start = 10.dp)
            )
//Then for picture bcz we want it in the side we add a row and style it with modifiers also
        Row(
            Modifier
                .padding(top = 20.dp),
            horizontalArrangement = Arrangement.Start,
        ) {

Text(text = stringResource(id = R.string.description), fontSize = 15.sp, color = Color.White, modifier = Modifier.width(240.dp).padding(10.dp))
            Image(
                painter = painterResource(id = R.drawable.restaurant3), contentDescription = " ",
                Modifier.height(200.dp).clip(RoundedCornerShape(20.dp))

                    )



        }

    }
//finally we place the button outside of the row so it is placed belows the description

    Button(onClick = { /*TODO*/ },
        colors = ButtonDefaults.buttonColors(colorResource(id = R.color.Yellow2)),
        shape = RoundedCornerShape(10.dp),
        modifier = Modifier.padding(top = 200.dp, start = 10.dp)
    ) {
        Text(stringResource(id = R.string.order),
            color = colorResource(id = R.color.LemonBack)
        )
    }
}

