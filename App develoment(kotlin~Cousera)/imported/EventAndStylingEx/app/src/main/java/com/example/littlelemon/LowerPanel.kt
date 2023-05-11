package com.example.littlelemon

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.Card
import androidx.compose.material.Colors
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun LowerPanel() {
    Column {
        WeeklySpecial()
        MenuDish()
    }
}


@Composable
fun WeeklySpecial(){
    // to be defined
    Column() {
        
        Card() {
            Text(text = "weekly Special", fontSize = 26.sp, modifier = Modifier.padding(8.dp))
        }
        
    }
    
}


@Composable
fun MenuDish() {

    Card() {
       Row(
           Modifier
               .fillMaxWidth()
               .padding(8.dp)
               .background(Color(0xECF0F1))
       )
       {
Column() {
    Text(text = "Greek Salad", fontSize = 18.sp, fontWeight = FontWeight.Bold, modifier = Modifier.padding(8.dp))
    Text(text = "The famous Greek salad of crispy lettuce, peppers, olives, our Chicago .", fontSize = 18.sp, color =Color.Gray,
    modifier = Modifier.padding(top = 5.dp, bottom = 5.dp).fillMaxWidth(.75f))
    Text(text = "$12.99", fontWeight = FontWeight.Bold, fontSize = 24.sp,color=Color.Gray)

}
     Image(painter = painterResource(id = R.drawable.greeksalad), contentDescription = " ")


       }

    }

}

@Preview(showBackground = true)
@Composable
fun LowerPanelPreview(){
    LowerPanel()
}
