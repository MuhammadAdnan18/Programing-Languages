package com.example.littlelemonlogin

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.littlelemonlogin.ui.theme.LittleLemonLoginTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            LittleLemonLoginTheme {
                // A surface container using the 'background' color from the theme
Surface(modifier = Modifier.fillMaxSize(),
    color = MaterialTheme.colors.background   ){
    LoginScreen()
}
            }
                }
            }
        }
    

@Composable
fun LoginScreen(){
    Column(
        verticalArrangement = Arrangement.Center,
    horizontalAlignment = Alignment.CenterHorizontally


    ) {
        //defining logo
        Image(painterResource(id = R.drawable.littlelemonlogo) , contentDescription ="" )
     
        //definging username textfield
        TextField(value = "", onValueChange ={}, label = { Text(text = stringResource(id = R.string.username))} )
        
        //definging password textfield
        TextField(value = "", onValueChange ={}, label = { Text(text = stringResource(id = R.string.password))} )

        //definging Login Button
        
        Button(
            onClick = { /*TODO*/ },
            colors = ButtonDefaults.buttonColors(Color(0xFF495E57))
            ) {
            Text(text = "Login",
                color= Color(0xFFEDEFEE)
            )

        }


    }
    
    
}

