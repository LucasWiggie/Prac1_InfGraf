#version 330 core

in vec3 inPos;	
in vec3 inNormal;
in vec2 inTexCoord;

uniform mat4 modelViewProj;
uniform mat4 modelView;

out vec3 norm;
out vec2 texCoord;

void main()
{
	norm = (transpose(inverse(modelView)) * vec4(inNormal,0)).xyz;
	texCoord = inTexCoord;

	gl_Position =  modelViewProj * vec4(inPos, 1.0);
}
