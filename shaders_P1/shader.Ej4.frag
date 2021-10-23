#version 330 core

in vec3 norm;
in vec2 texCoord;
in int gl_PrimitiveID;

out vec4 outColor;

uniform sampler2D colortex;

void main()
{
	if(gl_PrimitiveID % 2 != 0){
		outColor = vec4(norm, 1.0);
	} else {
		outColor = texture(colortex, texCoord);
	}
}