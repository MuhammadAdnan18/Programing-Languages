package com.example.mainactivity1

import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.LinearLayout
import android.widget.TextView

//LAYOUTS AND VEIWS//
//VEIWS: in android sdk view is represented by veiw class it is the parent class of all the views.(e.g classes/elements like textview,textfield,button are all inherited from view.
//ViewGroups: are special kind of view that are not visible themeselves and act as a container for other views and layouts
//Layouts:Layouts are also similar to view groups they are three types:1relative layout(organizes items around other layouts/items), 2)linear layout(organizes items horizentally or vertically in a single column or row) ,3
class MainActivity : AppCompatActivity() {

    //oncreate is always defined in main activity bcz program execution starts from here.
    //LETS CREATE A SIMPLE UI FOR LITTLE LEMON APP USING VIEWS AND LAYOUTS ONLY.
    //just like we created the simple layout of little lemon using xml file, now we do same but programically without drag and drop in the kotlin main activity file.
    lateinit var toplayout : LinearLayout

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        //ithe line below takes the xml file(the layout file in which hello android text is present) as a parameter with R as a rooth
        setContentView(R.layout.activity_main)
        toplayout=findViewById(R.id.toplayout)
        var textView= TextView(this)
        textView.text=resources.getText(R.string.little_lemon)
        toplayout.addView(textView)
        toplayout.setBackgroundColor(Color.parseColor("#495E57"))
        textView.setTextColor(Color.parseColor("#F4CE14"))

    }

}