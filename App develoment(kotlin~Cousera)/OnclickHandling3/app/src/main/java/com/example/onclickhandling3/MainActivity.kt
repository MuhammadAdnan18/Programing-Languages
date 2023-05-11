package com.example.onclickhandling3

import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.onclickhandling3.ui.theme.OnclickHandling3Theme

//EVENT HANDLING:it is the response that our app will give to user behaviour such as click ,ling click,drag,and differnet guestures

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            OnclickHandling3Theme {
                // A surface container using the 'background' color from the theme

                    UpperPanel()

            }
        }
    }
}

//Lets create a response of order succesful toast on order button
@Composable
fun UpperPanel() {
    val context= LocalContext.current
    Column(
        verticalArrangement = Arrangement.Top,
        horizontalAlignment = Alignment.Start,
        modifier = Modifier
            .fillMaxWidth()
            .background(color = colorResource(id = R.color.LemonBack))



    ) {
        Text(
            stringResource(id = R.string.little_lemon), fontSize = 25.sp, color = colorResource(id = R.color.Yellow2),
            modifier = Modifier.padding(top = 10.dp,start = 10.dp)
        )
        Text(
            stringResource(id = R.string.chicago),fontSize = 20.sp, color = Color.White,
            modifier = Modifier.padding( start = 10.dp)
        )
        Row(
            Modifier
                .padding(top = 20.dp),
            horizontalArrangement = Arrangement.Start,
        ) {

            Text(text = stringResource(id = R.string.description), fontSize = 15.sp, color = Color.White, modifier = Modifier
                .width(240.dp)
                .padding(10.dp))
            Image(
                painter = painterResource(id = R.drawable.restaurant3), contentDescription = " ",
                Modifier
                    .height(200.dp)
                    .clip(RoundedCornerShape(20.dp))

            )


        }

    }
//finally we place the button outside of the row so it is placed belows the description

    Button(onClick = { /*TODO*/ }) {

    }
    Button(onClick = {Toast.makeText(context,"order succesfull",Toast.LENGTH_LONG).show()  },
        colors = ButtonDefaults.buttonColors(colorResource(id = R.color.Yellow2)),
        shape = RoundedCornerShape(10.dp),
        modifier = Modifier.padding(top = 200.dp, start = 10.dp)
    ) {
        Text(
            stringResource(id = R.string.order),
            color = colorResource(id = R.color.LemonBack)
        )
    }

    Button(onClick = { Toast.makeText(context, "Order canceled!", Toast.LENGTH_SHORT).show() },
        colors = ButtonDefaults.buttonColors(colorResource(id = R.color.Yellow2)),
        shape = RoundedCornerShape(10.dp),
        modifier = Modifier.padding(top = 200.dp, start = 90.dp)
    ) {
        Text(
            stringResource(id = R.string.cancel),
            color = colorResource(id = R.color.LemonBack)
        )
    }

}

