package com.example.layouts3

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.layouts3.ui.theme.Layouts3Theme
//LAYOUTS:elements which are not themeselves visible but act as a container for organizing other views and elemnts such as text,buttons
//complex arrengement of elements can  be properly arranged by nesting layout
//there are several built in composable layouts
// 3TYPES:1)row(horizentally),2)column(vertically),3)box(both)
//arrangement and alignments are  used to posiytion the layouts
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            //lets create two text objects and pass some text after we run the app we see that both texts are overlapping this is because we have not defined them in a proper layout.
            
            //NOW we put both text objects inside the layout and now they are not overlapping th eproblem has been solved
            Column(Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.Center,
                horizontalAlignment = Alignment.CenterHorizontally
                ){

                
                Text(text = stringResource(id = R.string.chicago), fontSize = 20.sp,
                color = Color(0xFFF4CE14),

            )

                Text(text = "@chicago", fontSize = 20.sp,
                    color = Color(0xFFF4CE14),

                )


                Row() {

                    Button(onClick = { /*TODO*/ }
                        ,colors=ButtonDefaults.buttonColors(backgroundColor = Color.Gray),
                        border=BorderStroke(1.dp,Color.Red),
                        shape = RoundedCornerShape(20.dp)

                    )
                    {
                        Text(text = stringResource(id = R.string.order))

                    }
                    Image(painter = painterResource(id = R.drawable.restaurant3), contentDescription ="" )

                }

            }



        }
    }
}

