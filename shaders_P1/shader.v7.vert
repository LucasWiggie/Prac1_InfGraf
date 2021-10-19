#version 330 core

in vec3 inPos;	
in vec2 inTexCoord;
uniform mat4 modelViewProj;

out vec2 texCoord;

// Como vamos a añadir texturas, necesitamos las coordenadas de texturas, linea 149 BOX.h
void main()
{
	texCoord = inTexCoord;
	gl_Position =  modelViewProj * vec4(inPos, 1.0);
}
